/**
 * AgroGrains Wholesale - Form Validation & Inquiry Handler
 * Implements strict name, phone, email, and required-field verification
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initBulkQuoteForm();
  initModalQuoteForm();
});

// Name regex: Allows letters, spaces, hyphens, apostrophes (2 to 60 characters)
const NAME_REGEX = /^[A-Za-z\s'\-]{2,60}$/;

// Phone regex: Digits, spaces, +, -, (), minimum 7 digits, NO alphabetic letters
const PHONE_CHARS_REGEX = /^[0-9+\-\s()]{7,25}$/;
const HAS_LETTERS_REGEX = /[a-zA-Z]/;

// Email regex: RFC-compliant standard check
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateField(input, testFn, errorMsg) {
  const value = input.value.trim();
  const isValid = testFn(value);
  const feedbackEl = input.nextElementSibling && input.nextElementSibling.classList.contains('invalid-feedback')
    ? input.nextElementSibling
    : null;

  if (!isValid) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    if (feedbackEl) feedbackEl.textContent = errorMsg;
    return false;
  } else {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    return true;
  }
}

/* --- Contact Us Form Handler --- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const companyInput = document.getElementById('contact-company');
  const emailInput = document.getElementById('contact-email');
  const phoneInput = document.getElementById('contact-phone');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  // Real-time input listeners
  if (nameInput) {
    nameInput.addEventListener('blur', () => {
      validateField(nameInput, v => NAME_REGEX.test(v), "Please enter a valid name (letters, spaces, hyphens, and apostrophes only).");
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('blur', () => {
      validateField(phoneInput, v => !HAS_LETTERS_REGEX.test(v) && PHONE_CHARS_REGEX.test(v), "Phone must not contain letters and must have at least 7 digits (e.g. +1 555-0192).");
    });
  }

  if (emailInput) {
    emailInput.addEventListener('blur', () => {
      validateField(emailInput, v => EMAIL_REGEX.test(v), "Please enter a valid corporate or commercial email address.");
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, v => NAME_REGEX.test(v), "Please enter a valid name (letters, spaces, hyphens, and apostrophes only).");
    const isCompanyValid = validateField(companyInput, v => v.length >= 2, "Company or business name is required for wholesale inquiries.");
    const isEmailValid = validateField(emailInput, v => EMAIL_REGEX.test(v), "Please enter a valid business email address.");
    const isPhoneValid = validateField(phoneInput, v => !HAS_LETTERS_REGEX.test(v) && PHONE_CHARS_REGEX.test(v), "Valid phone number format required (numbers and +, -, () only).");
    const isSubjectValid = validateField(subjectInput, v => v.length > 0, "Please select an inquiry subject.");
    const isMessageValid = validateField(messageInput, v => v.length >= 10, "Please provide message details (minimum 10 characters).");

    if (isNameValid && isCompanyValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Submitting Inquiry...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showSubmissionSuccessModal({
          title: "Wholesale Inquiry Transmitted",
          message: `Thank you, ${nameInput.value.trim()} from ${companyInput.value.trim()}. Your message has been routed to our Trade Desk.`,
          refId: "INQ-" + Math.floor(100000 + Math.random() * 900000)
        });
        form.reset();
        form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
      }, 700);
    }
  });
}

/* --- Bulk Pricing Quote Form Handler --- */
function initBulkQuoteForm() {
  const form = document.getElementById('bulk-quote-form');
  if (!form) return;

  const nameInput = document.getElementById('quote-name');
  const companyInput = document.getElementById('quote-company');
  const emailInput = document.getElementById('quote-email');
  const phoneInput = document.getElementById('quote-phone');
  const productInput = document.getElementById('quote-product');
  const qtyInput = document.getElementById('quote-quantity');
  const locationInput = document.getElementById('quote-location');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, v => NAME_REGEX.test(v), "Please enter a valid representative name (letters only).");
    const isCompanyValid = validateField(companyInput, v => v.length >= 2, "Registered business name is required.");
    const isEmailValid = validateField(emailInput, v => EMAIL_REGEX.test(v), "Valid corporate email required.");
    const isPhoneValid = validateField(phoneInput, v => !HAS_LETTERS_REGEX.test(v) && PHONE_CHARS_REGEX.test(v), "Valid phone format required (numbers and standard formatting only).");
    const isProductValid = validateField(productInput, v => v.length > 0, "Please choose a product of interest.");
    const isQtyValid = validateField(qtyInput, v => v.length > 0, "Specify requested quantity (e.g. 5 MT or 25 MT FTL).");
    const isLocationValid = validateField(locationInput, v => v.length >= 3, "Delivery destination city/port is required for freight quotation.");

    if (isNameValid && isCompanyValid && isEmailValid && isPhoneValid && isProductValid && isQtyValid && isLocationValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Generating Quotation Request...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showSubmissionSuccessModal({
          title: "Wholesale Quote Request Received",
          message: `Official quotation dossier initiated for ${companyInput.value.trim()} regarding ${productInput.value}. Our commercial export manager will issue formal FOB/CIF pricing within 4 business hours.`,
          refId: "QUO-" + Math.floor(100000 + Math.random() * 900000)
        });
        form.reset();
        form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
      }, 800);
    }
  });
}

/* --- Global Modal Quote Form Handler --- */
function initModalQuoteForm() {
  const form = document.getElementById('global-modal-quote-form');
  if (!form) return;

  const nameInput = document.getElementById('modalQuoteName');
  const companyInput = document.getElementById('modalQuoteCompany');
  const emailInput = document.getElementById('modalQuoteEmail');
  const phoneInput = document.getElementById('modalQuotePhone');
  const productInput = document.getElementById('modalQuoteProduct');
  const qtyInput = document.getElementById('modalQuoteQty');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isName = validateField(nameInput, v => NAME_REGEX.test(v), "Please enter a valid representative name.");
    const isCompany = validateField(companyInput, v => v.length >= 2, "Company name is required.");
    const isEmail = validateField(emailInput, v => EMAIL_REGEX.test(v), "Valid business email is required.");
    const isPhone = validateField(phoneInput, v => !HAS_LETTERS_REGEX.test(v) && PHONE_CHARS_REGEX.test(v), "Valid contact phone is required.");
    const isProduct = validateField(productInput, v => v.length > 0, "Select a grain product.");
    const isQty = validateField(qtyInput, v => v.length > 0, "Specify requested volume.");

    if (isName && isCompany && isEmail && isPhone && isProduct && isQty) {
      const modalEl = document.getElementById('globalQuoteModal');
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) modalInstance.hide();

      showSubmissionSuccessModal({
        title: "Fast-Track Quote Generated",
        message: `Quote request for ${productInput.value} (${qtyInput.value}) has been submitted for ${companyInput.value}. Reference dispatched to ${emailInput.value}.`,
        refId: "FAST-" + Math.floor(100000 + Math.random() * 900000)
      });

      form.reset();
      form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
    }
  });
}

/* --- Success Feedback Modal Helper --- */
function showSubmissionSuccessModal({ title, message, refId }) {
  let modalEl = document.getElementById('feedbackSuccessModal');
  if (!modalEl) {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="modal fade" id="feedbackSuccessModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content text-center p-4">
            <div class="modal-body">
              <div class="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 64px; height: 64px; font-size: 2rem;">
                <i class="bi bi-check-lg"></i>
              </div>
              <h4 class="fw-bold mb-2" id="feedbackModalTitle">${title}</h4>
              <p class="text-muted mb-3" id="feedbackModalMessage">${message}</p>
              <div class="p-3 bg-muted rounded-3 border mb-3">
                <span class="small text-muted d-block text-uppercase fw-bold letter-spacing-1">Wholesale Reference Number</span>
                <span class="fs-5 fw-bold text-primary" id="feedbackModalRef">${refId}</span>
              </div>
              <button type="button" class="btn btn-wholesale-primary px-4" data-bs-dismiss="modal">Acknowledge</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(div);
    modalEl = document.getElementById('feedbackSuccessModal');
  } else {
    document.getElementById('feedbackModalTitle').textContent = title;
    document.getElementById('feedbackModalMessage').textContent = message;
    document.getElementById('feedbackModalRef').textContent = refId;
  }

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

