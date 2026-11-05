/**
 * AgroGrains Wholesale - Blog & Industry Insights Engine
 * Realistic articles data, category filtering, search, and dynamic detail loader
 * Every article uses a distinct, unique image asset.
 */

const wholesaleArticles = [
  {
    id: "milling-and-sortex-cleaning-technology",
    title: "Milling and Sortex Cleaning: How Modern Technology Guarantees Purity in Grains",
    category: "milling",
    categoryLabel: "Milling & Quality",
    date: "October 02, 2026",
    author: "Vikramjit Singh (Plant Operations Director)",
    readTime: "8 min read",
    image: "assets/images/blog-sortex-optical-cleaning.jpg",
    excerpt: "Examine how multi-camera bichromatic optical sorters, de-stoners, and magnetic separators remove foreign matter and discolored kernels to achieve 99.9% purity.",
    contentHtml: `
      <p>In high-volume commercial grain procurement, grain purity is not merely an aesthetic parameter—it directly dictates downstream packaging speed, shelf life, and international phytosanitary compliance. Modern optical sortex cleaning has revolutionized mill processing, replacing traditional mechanical screens with artificial-intelligence-driven machine vision capable of inspecting tens of thousands of individual falling kernels per second.</p>

      <h2>1. The Multi-Stage Mechanical & Optical Cleaning Flow</h2>
      <p>Raw paddy and field-harvested grain arrivals contain significant extraneous material, ranging from straw, husks, and weed seeds to dense stones, field mud clods, and metallic debris. To guarantee 99.9% wholesale purity, processing follows an unbroken multi-machine sequence:</p>
      <ol>
        <li><strong>Rotary Scalping & Pre-Cleaning:</strong> High-throughput rotary drum screens strip away oversized field debris, coarse straw, and stalk fragments before grain enters precision conveyors.</li>
        <li><strong>Vibratory Destoning & Specific Gravity Tables:</strong> Grains are fluidized on inclined oscillating decks. Air currents stratify materials by density: heavy stones and glass particles migrate uphill toward the reject chute, while lighter grain floats smoothly toward the processing flow.</li>
        <li><strong>Magnetic Separation Grids:</strong> Rare-earth neodymium magnetic grids capture ferrous metal fragments, baling wire shards, and machinery wear particles before grains reach the de-huskers.</li>
        <li><strong>Rubber-Roll De-Husking & Husk Aspiration:</strong> Counter-rotating polyurethane rubber rollers operate at controlled differential speeds to gently shear off the fibrous husk without fracturing the rice endosperm. Powerful cyclone aspirators instantly pull away husks for boiler fuel.</li>
        <li><strong>Multi-Camera Bichromatic Optical Color Sorting (Sortex):</strong> Kernels free-fall through high-intensity LED and InGaAs infrared inspection zones. High-speed CCD sensors photograph each grain from multiple angles. Pneumatic micro-ejector valves fire focused micro-pulses of compressed air (within 1/1000th of a second) to blast defective grains into the reject stream.</li>
      </ol>

      <div class="table-responsive my-4">
        <table class="table table-bordered">
          <thead class="table-light">
            <tr>
              <th>Processing Stage</th>
              <th>Contaminant Eliminated</th>
              <th>Detection Technology</th>
              <th>Export Benchmark Threshold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Pre-Cleaner &amp; Aspirator</strong></td>
              <td>Chaff, straw, field dust, mud</td>
              <td>Rotary drum &amp; vacuum airflow</td>
              <td>&lt; 0.10% Foreign Matter</td>
            </tr>
            <tr>
              <td><strong>Vibratory Destoner</strong></td>
              <td>Stones, gravel, dense minerals</td>
              <td>Specific gravity fluidized deck</td>
              <td>Zero tolerance (0 stones / MT)</td>
            </tr>
            <tr>
              <td><strong>Bichromatic Sortex</strong></td>
              <td>Chalky, yellow, black-tipped, peck-damaged</td>
              <td>Visible RGB + InGaAs Infrared</td>
              <td>99.9% Color Purity</td>
            </tr>
            <tr>
              <td><strong>Metal Detector</strong></td>
              <td>Ferrous, non-ferrous, stainless steel</td>
              <td>Dual-frequency electromagnetic coil</td>
              <td>Fe &lt; 1.0mm, SS &lt; 1.5mm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>2. Distinguishing Optical Defects: Chalky vs Peck-Damaged Kernels</h2>
      <p>Commercial buyers must verify how sorting parameters are programmed at the mill:</p>
      <ul>
        <li><strong>Chalky Grains (Immature Starch):</strong> Grains with opaque, milky centers. While safe to eat, chalky kernels have weakened crystalline starch bonds and crumble into broken fragments during cooking, releasing excessive starch and causing sticky clumps in commercial foodservice.</li>
        <li><strong>Peck / Insect-Damaged Grains:</strong> Kernels pierced by stink bugs (Oebalus pugnax) while in the milk stage. The puncture site introduces fungal spores, leaving an indelible brown or black lesion that stains cooked rice and elevates free fatty acid (FFA) values.</li>
        <li><strong>Discolored / Yellow Kernels:</strong> Result from moisture heat buildup inside paddy stacks prior to drying. Highly visible on supermarket shelves and rejected by premium retail brands.</li>
      </ul>

      <blockquote>
        "Automated sortex systems operating with InGaAs shortwave-wave infrared illumination detect internal aflatoxin colonies and glass fragments that are completely invisible to standard RGB cameras."
      </blockquote>

      <h2>3. Procurement Best Practices for Commercial Buyers</h2>
      <p>When reviewing Certificate of Analysis (COA) documents from mills, institutional purchasing managers should mandate independent sampling by third-party inspection agencies (such as SGS or Bureau Veritas). Insist on proforma guarantees specifying Sortex Purity ≥ 99.8% and maximum allowable foreign matter ≤ 0.05%.</p>
    `
  },
  {
    id: "grain-storage-and-warehouse-preservation",
    title: "Grain Storage and Pest Preservation in Wholesale Warehouses: Silos vs Stacked Sheds",
    category: "logistics",
    categoryLabel: "Storage & Logistics",
    date: "September 24, 2026",
    author: "Elena Rostova (Supply Chain Quality Specialist)",
    readTime: "9 min read",
    image: "assets/images/blog-silo-storage.jpg",
    excerpt: "Scientific pest management, aeration temperature controls, and moisture equilibrium management to preserve rice and pulses during extended commercial storage.",
    contentHtml: `
      <p>Managing agricultural commodities at wholesale scale requires strict adherence to grain thermodynamics. A grain mass is a living, respiring biological system. If ambient relative humidity and temperature are not continually balanced with kernel moisture equilibrium, natural respiration accelerates, generating moisture hotspots, fungal mycelia, and explosive weevil infestations.</p>

      <h2>1. Thermodynamics of Grain Respiration & Equilibrium Moisture</h2>
      <p>Dry grain absorbs and desorbs moisture depending on surrounding atmospheric conditions until it reaches Equilibrium Moisture Content (EMC). In tropical and monsoon transit zones, keeping ambient relative humidity below 65% is non-negotiable:</p>
      <ul>
        <li><strong>Moisture Below 12.0%:</strong> Respiration rates remain minimal; mold spore germination is physically inhibited; insect reproduction is severely curtailed.</li>
        <li><strong>Moisture Between 13.0% – 14.5%:</strong> Safe for short-term 30-day warehousing with active ventilation, but vulnerable to localized condensation if temperature drops sharply overnight.</li>
        <li><strong>Moisture Exceeding 15.0%:</strong> Accelerated heating occurs within 72 hours, resulting in caking, musty odors, and dangerous aflatoxin proliferation.</li>
      </ul>

      <h2>2. Silo Storage vs Masonry Stacked Sheds: Engineering Comparison</h2>
      <div class="table-responsive my-4">
        <table class="table table-bordered">
          <thead class="table-light">
            <tr>
              <th>Storage System</th>
              <th>Ideal Commodity Types</th>
              <th>Aeration &amp; Temperature Control</th>
              <th>Pest Fumigation Efficiency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Galvanized Corrugated Steel Silos</strong></td>
              <td>Milling wheat, yellow maize, coarse paddy</td>
              <td>Automated thermocouple cables; perforated bottom aeration ducts</td>
              <td>100% Hermetic gas-tight sealing for recirculation fumigation</td>
            </tr>
            <tr>
              <td><strong>Palletized Masonry Godowns</strong></td>
              <td>Processed Basmati rice, Sona Masoori, split pulses</td>
              <td>High-volume exhaust louvers; nocturnal ambient cool air exchange</td>
              <td>Gas-tight PVC/polyethylene tarp fumigation under sand snake seals</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>3. Integrated Pest Management (IPM) Protocols</h2>
      <p>Wholesale grain preservation rejects indiscriminate chemical spraying in favor of scientific IPM:</p>
      <ul>
        <li><strong>Pheromone Monitoring Traps:</strong> Deployed every 100 meters along warehouse perimeter walls to detect adult grain borers (<em>Rhyzopertha dominica</em>) and rice weevils (<em>Sitophilus oryzae</em>) before larval infestation takes hold.</li>
        <li><strong>Aluminum Phosphide Gas Fumigation:</strong> Performed under heavy 250-micron gas-proof sheets. Dosage is calibrated at 3 tablets per metric ton with a minimum 7-day exposure period at 25°C, ensuring 100% mortality across egg, larval, pupal, and adult life stages without leaving harmful chemical residues.</li>
        <li><strong>Controlled Atmosphere (CO2 / Nitrogen Flushes):</strong> Utilized for organic certified export consignments, displacing oxygen to under 1% to suffocate pests organically.</li>
      </ul>
    `
  },
  {
    id: "bulk-purchasing-strategies-for-retailers",
    title: "Bulk Purchasing Strategies for Supermarket Chains and Regional Wholesalers",
    category: "trading",
    categoryLabel: "Wholesale Trading",
    date: "September 11, 2026",
    author: "Arun Malhotra (Procurement Advisory Head)",
    readTime: "8 min read",
    image: "assets/images/blog-bulk-purchasing-strategy.jpg",
    excerpt: "How procurement directors mitigate price volatility through harvest contracts, staged multi-truckload deliveries, and private-label packaging agreements.",
    contentHtml: `
      <p>Agricultural commodities trade on razor-thin operating margins. For retail supermarket chains, foodservice suppliers, and regional distributors, profitability is rarely won in the store aisle; it is captured at the mill dispatch gate through disciplined procurement timing, risk hedging, and freight optimization.</p>

      <h2>1. Navigating Mandi Harvest Arrival Cycles</h2>
      <p>Grain prices exhibit predictable cyclicality tied to seasonal harvest arrivals:</p>
      <ul>
        <li><strong>Kharif Arrival Window (October to January):</strong> Peak arrivals of paddy (Basmati, Sona Masoori, Ponni, IR64) flood agricultural mandis. Mill processing capacity runs at 100%. Securing volume forward contracts during peak arrivals locks in seasonal low baseline pricing before warehouse carrying charges and financing interest accumulate.</li>
        <li><strong>Rabi Arrival Window (March to May):</strong> Peak arrivals of milling wheat (Sharbati, Durum) and major pulse crops (Chana, Yellow Peas). Prime window for securing institutional annual wheat quotas.</li>
        <li><strong>Off-Season Lean Months (July to September):</strong> Mandi arrivals dwindle. Physical grain is tightly held in secondary warehouses, driving spot prices up by 8% to 18%. Buyers without forward price-lock agreements face steep volatility.</li>
      </ul>

      <h2>2. Freight Optimization: FTL vs Container Payload Math</h2>
      <p>Freight overhead can account for 6% to 14% of landed grain cost. Consolidating into Full Truckloads (FTL) avoids severe Less-Than-Truckload (LTL) surcharges:</p>
      <ul>
        <li><strong>25 MT Multi-Axle Truckloads:</strong> Carries exactly 500 bags of 50kg or 1,000 bags of 25kg, maximizing truck axle weight limits and reducing transport cost per kilogram by up to 22%.</li>
        <li><strong>20-Foot Heavy Dry Van Sea Containers:</strong> Certified for 26.5 MT bulk payloads in woven sacks, optimizing ocean shipping freight rates per ton.</li>
      </ul>
    `
  },
  {
    id: "sona-masoori-vs-ponni-rice-comparison",
    title: "Understanding Sona Masoori vs Ponni Rice: Texture, Amylose Content, and Regional Demand",
    category: "varieties",
    categoryLabel: "Rice Varieties",
    date: "August 28, 2026",
    author: "Dr. K. Swaminathan (Agricultural Scientist)",
    readTime: "7 min read",
    image: "assets/images/blog-amylose-comparison.jpg",
    excerpt: "Detailed scientific comparison of two southern staples: Amylose starch percentages, steaming dynamics, shelf-life, and regional institutional catering preferences.",
    contentHtml: `
      <p>While Basmati rice commands international fine-dining prestige, Sona Masoori and Ponni rice constitute the true commercial volume backbone of everyday grain trade across South Asia, the Middle East, Southeast Asia, and Western diaspora retail markets.</p>

      <h2>1. The Amylose-to-Amylopectin Starch Continuum</h2>
      <p>The cooking behavior, flakiness, and digestion speed of any rice variety are governed by its starch composition:</p>
      <ul>
        <li><strong>Sona Masoori (Raw / Steam Milled):</strong> Features an intermediate amylose content of 20% to 22%. Cooked grains emerge light, fragrant, delicate, and easily digestible. Highly preferred by urban households, healthcare institutions, and diabetic diet programs due to its lower starch heaviness.</li>
        <li><strong>Ponni Boiled / Parboiled:</strong> High in amylose (24% to 27%). The hydro-thermal parboiling process gelatinizes the endosperm starch, cementing it into a firm, resilient matrix. When cooked, Ponni grains expand significantly in volume, stay strictly separate, and absorb generous amounts of rich gravies without breaking or becoming mushy.</li>
      </ul>

      <div class="table-responsive my-4">
        <table class="table table-bordered">
          <thead class="table-light">
            <tr>
              <th>Technical Metric</th>
              <th>Sona Masoori (Raw/Steam)</th>
              <th>Ponni Boiled / Parboiled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Uncooked Grain Length</strong></td>
              <td>5.0 mm – 5.3 mm (Medium Slender)</td>
              <td>5.2 mm – 5.5 mm (Medium Bold)</td>
            </tr>
            <tr>
              <td><strong>Amylose Percentage</strong></td>
              <td>20.5% – 22.0%</td>
              <td>24.5% – 27.0%</td>
            </tr>
            <tr>
              <td><strong>Gelatinization Temp</strong></td>
              <td>Intermediate (70°C – 74°C)</td>
              <td>High (74°C – 80°C)</td>
            </tr>
            <tr>
              <td><strong>Volume Expansion Ratio</strong></td>
              <td>3.2x – 3.5x</td>
              <td>4.0x – 4.5x (Superior Yield)</td>
            </tr>
            <tr>
              <td><strong>Target Customer Base</strong></td>
              <td>Retail supermarkets, private-label packs, daily family cooking</td>
              <td>Industrial canteens, hotel catering, restaurants, buffet foodservice</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>2. Institutional Catering Economics</h2>
      <p>For commercial caterers and corporate cafeterias, Ponni parboiled rice delivers unmatched cost-per-serving economics. Its 4.2x cooked volume expansion ratio means 1 kg of raw Ponni yields more cooked portions than raw rice, while remaining firm under prolonged buffet warming pans.</p>
    `
  },
  {
    id: "wholesale-pulse-procurement-moisture-adulteration",
    title: "Wholesale Pulse Procurement: Mitigating Moisture and Adulteration in Dal Supply Chains",
    category: "milling",
    categoryLabel: "Milling & Quality",
    date: "August 14, 2026",
    author: "Vikramjit Singh (Plant Operations Director)",
    readTime: "8 min read",
    image: "assets/images/blog-pulse-procurement-qa.jpg",
    excerpt: "Essential field tests for pulses: identifying polished vs unpolished toor dal, detecting synthetic colorants, and verifying split uniformity.",
    contentHtml: `
      <p>Pulses and split lentils (Toor Dal, Chana Dal, Urad Dal, Moong Dal) are protein-dense staples with sensitive supply chain dynamics. Due to their high market value, pulse markets are historically susceptible to deceptive processing practices, including synthetic dye coating, mineral oil polishing, and blending with inferior legume varieties.</p>

      <h2>1. Fatka Unpolished vs Oil-Polished Dal</h2>
      <p>Understanding processing methodologies allows commercial buyers to demand authentic quality:</p>
      <ul>
        <li><strong>Fatka (Dry Multi-Stage De-husking):</strong> The gold standard of pulse processing. Raw pigeon peas are naturally sun-tempered and processed through precision emery rolls and dry color sorters without added water, oil, or chemical polish. Kernels retain a natural matte golden hue, maximum dietary fiber, 22%+ protein bioavailability, and cook uniformly in 15 minutes.</li>
        <li><strong>Water / Oil Polishing:</strong> Water and edible oils (such as castor or linseed oil) are applied to impart a deceptive gloss and artificially inflate grain weight. Over time, the surface oil oxidizes, creating rancid odors and encouraging fungal growth during storage.</li>
      </ul>

      <h2>2. Laboratory Chemical Screening Tests</h2>
      <p>Institutional quality assurance teams should execute routine verification:</p>
      <ul>
        <li><strong>Metanil Yellow Detection:</strong> Unscrupulous suppliers occasionally tint low-grade dal with metanil yellow (an industrial non-permitted azo dye). <em>Field Test:</em> Add concentrated hydrochloric acid (HCl) to a warm water extract of the dal. An immediate magenta or pink discoloration confirms the presence of prohibited synthetic dyes.</li>
        <li><strong>Kesari Dal (Lathyrus sativus) Adulteration:</strong> Adulteration with toxic kesari dal causes neurolathyrism. Sortex inspection screens for the distinctive wedge-shaped, square cross-section of kesari seeds compared to round pigeon peas.</li>
      </ul>
    `
  },
  {
    id: "sustainable-rice-farming-mill-sourcing",
    title: "Sustainable Rice Cultivation and Mill-Direct Sourcing: Reducing Water Footprint in Grains",
    category: "trading",
    categoryLabel: "Wholesale Trading",
    date: "July 30, 2026",
    author: "Elena Rostova (Supply Chain Quality Specialist)",
    readTime: "7 min read",
    image: "assets/images/blog-sustainable-rice-paddy.jpg",
    excerpt: "How direct farmer partnerships, Alternate Wetting and Drying (AWD), and residue management are transforming modern wholesale agricultural supply chains.",
    contentHtml: `
      <p>Environmental, Social, and Governance (ESG) compliance is transitioning from voluntary corporate social responsibility into hard commercial contract criteria. Supermarket conglomerates in Europe, the Americas, and the Middle East increasingly mandate verifiable farm-to-warehouse carbon and water footprints for imported grain consignments.</p>

      <h2>1. The Alternate Wetting and Drying (AWD) Revolution</h2>
      <p>Traditional continuous-flood paddy cultivation consumes up to 4,000 liters of fresh water per kilogram of milled rice and produces significant anaerobic methane emissions. AgroGrains' mill-direct farmer clusters practice Alternate Wetting and Drying:</p>
      <ul>
        <li>Perforated field tubes monitor soil water depth. Irrigation water is introduced only when the water level drops 15 cm below the soil surface, drying the field intermittently.</li>
        <li>Water consumption is reduced by 25% to 35% without any reduction in grain yield or starch elongation.</li>
        <li>Aerobic soil conditions interrupt methanogenic bacteria, slashing field greenhouse gas (GHG) emissions by over 40%.</li>
      </ul>

      <h2>2. Crop Residue Management & Zero Stubble Burning</h2>
      <p>Partnering farmers utilize mechanical Happy Seeders and balers to mulch paddy straw directly back into the topsoil as organic humus, completely eliminating seasonal stubble burning while enriching soil nitrogen naturally.</p>
    `
  },
  {
    id: "packaging-types-bopp-jute-fibc-sacks",
    title: "Packaging Matters: Comparing 25kg BOPP, Jute Sacks, and FIBC Jumbo Bags for Longevity",
    category: "logistics",
    categoryLabel: "Storage & Logistics",
    date: "July 12, 2026",
    author: "Rajeshwar Rao (Chief Milling Technologist)",
    readTime: "8 min read",
    image: "assets/images/blog-commercial-packaging.jpg",
    excerpt: "Comprehensive evaluation of commercial wholesale packaging materials: Moisture barriers, drop test ratings, stacking durability, and export shipping compliance.",
    contentHtml: `
      <p>Packaging in wholesale grain commerce is an engineered protective envelope designed to withstand multi-modal forklift drops, humid ocean transits, and warehouse stack pressures exceeding 20 bags high. Specifying the wrong sack structure can result in burst seams, insect entry, and ruined cargo.</p>

      <h2>1. Detailed Sack Material Engineering Matrix</h2>
      <div class="table-responsive my-4">
        <table class="table table-bordered">
          <thead class="table-light">
            <tr>
              <th>Packaging Material</th>
              <th>Tensile Strength &amp; Burst Rating</th>
              <th>Moisture Barrier (MVTR)</th>
              <th>Optimal Commercial Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>BOPP Laminated Polypropylene</strong></td>
              <td>Very High (Multi-layer co-extrusion)</td>
              <td>Near Zero MVTR; impermeable to ambient humidity</td>
              <td>Retail supermarket 5kg, 10kg, 25kg branded display packs</td>
            </tr>
            <tr>
              <td><strong>Heavy Woven PP Sacks (with PE liner)</strong></td>
              <td>Industry standard; puncture resistant</td>
              <td>High protection when fitted with 50-micron poly liner</td>
              <td>Standard bulk 50 kg truckload &amp; container export shipping</td>
            </tr>
            <tr>
              <td><strong>Natural Jute Sacks (Burlap)</strong></td>
              <td>High friction; stable in tall stacks</td>
              <td>High breathability; allows natural moisture evaporation</td>
              <td>Aged Basmati rice maturation, agricultural seed storage</td>
            </tr>
            <tr>
              <td><strong>FIBC Jumbo Bags (1,000 kg)</strong></td>
              <td>Heavy-duty UV-stabilized woven polypropylene</td>
              <td>Equipped with discharge spout and moisture liner</td>
              <td>Industrial flour mills, animal feed plants, starch processing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>2. The ASTM Drop Test Standard</h2>
      <p>Every packaging batch undergoes stringent drop-impact verification: filled 50kg sacks must survive three consecutive 1.2-meter flat and end drops onto concrete without seam slippage or fabric tearing.</p>
    `
  },
  {
    id: "global-container-freight-export-logistics",
    title: "Global Container Freight & Ocean Logistics: Export Shipping Workflows for Grain Commodities",
    category: "logistics",
    categoryLabel: "Storage & Logistics",
    date: "June 25, 2026",
    author: "Elena Rostova (Supply Chain Quality Specialist)",
    readTime: "8 min read",
    image: "assets/images/blog-container-freight.jpg",
    excerpt: "FOB vs CIF contract mechanics, 20-foot dry van container stuffing limits, desiccant barrier installation, and phytosanitary pre-shipment clearance.",
    contentHtml: `
      <p>Ocean transit presents the most severe environmental challenge in international grain trade. When a vessel navigates from hot tropical loading ports through cool northern sea lanes, internal temperature differentials cause 'container sweat'—condensation that drips from the steel ceiling directly onto top-tier cargo.</p>

      <h2>1. The Anti-Condensation Container Prep Protocol</h2>
      <p>To eliminate maritime moisture damage, our export container preparation follows strict guidelines:</p>
      <ul>
        <li><strong>Structural Inspection:</strong> Containers are checked for light leaks, door gasket elasticity, floor odor contamination, and rust scaling before acceptance.</li>
        <li><strong>Heavy Kraft Paper Lining:</strong> All internal container steel walls and wooden floors are lined with continuous 120 GSM kraft paper to prevent direct sack contact with chilled steel.</li>
        <li><strong>High-Absorption Desiccant Bars:</strong> High-capacity calcium chloride desiccant poles (absorbing over 250% of their weight in moisture) are suspended in the corrugation recesses to continuously strip humidity from the air.</li>
      </ul>

      <h2>2. Trade Terms: FOB, CFR, and CIF Clearances</h2>
      <p>We execute shipments under standard Incoterms 2020: providing verified container gross mass (VGM), ocean bills of lading (B/L), phytosanitary certificates, certificate of origin, and fumigation certificates for seamless customs clearance worldwide.</p>
    `
  },
  {
    id: "laboratory-moisture-testing-grain-standards",
    title: "Purity Testing & Moisture Meters: Laboratory Protocols for Wholesale Grain Acceptance",
    category: "milling",
    categoryLabel: "Milling & Quality",
    date: "May 22, 2026",
    author: "Dr. K. Swaminathan (Agricultural Scientist)",
    readTime: "7 min read",
    image: "assets/images/blog-lab-testing.jpg",
    excerpt: "Benchtop dielectric moisture analyzers, hectolitre weight test tubes, and thousand-kernel weight (TKW) calculations used in institutional grain receiving.",
    contentHtml: `
      <p>In wholesale grain commerce, moisture measurement is a financial metric. Receiving a 1,000-ton grain consignment at 14.2% moisture instead of contractually mandated 12.0% means paying for 22 metric tons of excess water—while dramatically escalating microbiological spoilage risk.</p>

      <h2>1. Analytical Laboratory Instrumentation</h2>
      <p>Commercial acceptance testing relies on calibrated precision instrumentation:</p>
      <ul>
        <li><strong>Dielectric High-Frequency Moisture Meters:</strong> Analyzers measure the dielectric constant of the grain sample, delivering automated temperature-compensated moisture readings accurate to ±0.2% within 10 seconds.</li>
        <li><strong>130°C Air-Oven Reference Method (ISO 712):</strong> The definitive regulatory benchmark against which all digital meters are calibrated bi-weekly. Ground grain samples are desiccated under controlled thermal ovens to calculate exact gravimetric moisture loss.</li>
        <li><strong>Hectolitre Weight (Test Weight / Bulk Density):</strong> Measured in kilograms per hectolitre (kg/hL) using a standardized chondrometer cylinder. Direct indicator of kernel plumpness and expected flour or head-rice milling yield.</li>
      </ul>
    `
  },
  {
    id: "fumigation-and-aflatoxin-prevention",
    title: "Aflatoxin Control and Fumigation Standards in Long-Term Grain Storage",
    category: "logistics",
    categoryLabel: "Storage & Logistics",
    date: "May 05, 2026",
    author: "Vikramjit Singh (Plant Operations Director)",
    readTime: "8 min read",
    image: "assets/images/blog-grain-fumigation-control.jpg",
    excerpt: "Preventing Aspergillus flavus contamination, automated thermocouple temperature cables, and non-residual phosphine gas fumigation cycles.",
    contentHtml: `
      <p>Aflatoxins—potent carcinogenic mycotoxins synthesized by the molds <em>Aspergillus flavus</em> and <em>Aspergillus parasiticus</em>—represent the most stringent rejection barrier in international food commodity trade. Consignments exceeding European Union (4 ppb total aflatoxin) or US FDA (20 ppb) limits face mandatory re-export or destruction.</p>

      <h2>1. The Critical Control Points for Aflatoxin Prevention</h2>
      <p>Because aflatoxins cannot be destroyed through conventional cooking or milling heat, prevention during drying and storage is paramount:</p>
      <ul>
        <li><strong>Rapid Post-Harvest Drying:</strong> Raw grain moisture must be brought down below 13.0% within 48 hours of harvest to arrest fungal spore activation.</li>
        <li><strong>Thermocouple Temperature Cables:</strong> Industrial silos utilize suspended multi-point sensor cables providing real-time core temperature logging every 2 meters of depth. A localized temperature rise of 1.5°C triggers immediate automated aeration fans.</li>
        <li><strong>Hermetic Phosphine Gas Fumigation:</strong> Periodic fumigation under gas-tight PVC enclosures eliminates stored product insects whose feeding wounds create infection pathways for mold spores.</li>
      </ul>
    `
  },
  {
    id: "wheat-milling-quality-protein-gluten-standards",
    title: "Commercial Wheat Grading: Protein Benchmarks, Falling Number & Gluten Index for Flour Mills",
    category: "varieties",
    categoryLabel: "Rice & Grain Varieties",
    date: "April 18, 2026",
    author: "Arun Malhotra (Procurement Advisory Head)",
    readTime: "8 min read",
    image: "assets/images/blog-wheat-laboratory-grading.jpg",
    excerpt: "Understanding industrial bakery flour specs: Hagberg falling number (HFN > 250s), wet gluten percentages, and farinograph dough stability.",
    contentHtml: `
      <p>Industrial commercial flour mills and automated bakeries do not procure wheat based merely on kernel physical grade; they buy strictly according to rheological and biochemical baking metrics that determine loaf volume, crumb structure, and dough water absorption.</p>

      <h2>1. Core Wheat Milling Specifications</h2>
      <div class="table-responsive my-4">
        <table class="table table-bordered">
          <thead class="table-light">
            <tr>
              <th>Analytical Parameter</th>
              <th>Bread Milling Benchmark</th>
              <th>Biscuit &amp; Wafer Wheat</th>
              <th>Durum Pasta Wheat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Dry Basis Protein (N x 5.7)</strong></td>
              <td>12.5% – 14.0%</td>
              <td>9.0% – 10.5%</td>
              <td>13.5% – 15.5%</td>
            </tr>
            <tr>
              <td><strong>Hagberg Falling Number (HFN)</strong></td>
              <td>&gt; 280 seconds</td>
              <td>&gt; 220 seconds</td>
              <td>&gt; 350 seconds</td>
            </tr>
            <tr>
              <td><strong>Wet Gluten Percentage</strong></td>
              <td>28.0% – 32.0%</td>
              <td>20.0% – 24.0%</td>
              <td>30.0% – 36.0%</td>
            </tr>
            <tr>
              <td><strong>Gluten Index (GI)</strong></td>
              <td>80 – 95 (Strong elastic)</td>
              <td>50 – 70 (Extensible)</td>
              <td>85 – 98 (Very Strong)</td>
            </tr>
            <tr>
              <td><strong>Test Weight (Bulk Density)</strong></td>
              <td>&ge; 78 kg/hL</td>
              <td>&ge; 76 kg/hL</td>
              <td>&ge; 80 kg/hL</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>2. Significance of the Hagberg Falling Number</h2>
      <p>The Falling Number test measures alpha-amylase enzyme activity. Pre-harvest rain triggers grain germination, creating excess alpha-amylase that breaks down wheat starch into simple sugars. Flour milled from low-falling-number wheat (&lt; 200 seconds) results in sticky, gummy dough that jams commercial automated bakery conveyor lines.</p>
    `
  },
  {
    id: "ancient-millets-commercial-procurement",
    title: "Ancient Grains & Millets Procurement: Sourcing Ragi, Bajra, and Sorghum for Supermarkets",
    category: "varieties",
    categoryLabel: "Rice Varieties",
    date: "April 02, 2026",
    author: "Dr. K. Swaminathan (Agricultural Scientist)",
    readTime: "7 min read",
    image: "assets/images/blog-ancient-millets-procurement.jpg",
    excerpt: "Commercial supply chain considerations for supergrains: de-stoning finger millet, bulk Bajra moisture stabilization, and gluten-free industrial certification.",
    contentHtml: `
      <p>The global renaissance of ancient supergrains has propelled millets (Pearl Millet / Bajra, Finger Millet / Ragi, Foxtail Millet, and Sorghum / Jowar) from rural dryland crops into premium wholesale commodities sought by multi-national food corporations, health food manufacturers, and supermarket private-label brands.</p>

      <h2>1. Industrial Processing Hurdles & Solutions</h2>
      <p>Processing millets presents unique engineering challenges compared to standard cereal grains:</p>
      <ul>
        <li><strong>Micro-Destoning for Finger Millet (Ragi):</strong> Due to Ragi's diminutive seed diameter (1.0 mm – 1.5 mm), conventional destoners fail to separate matching sand particles. Modern processing uses high-frequency vibrating micro-gravity decks and optical infrared sorters to guarantee 100% stone-free purity.</li>
        <li><strong>Lipase Enzyme Inactivation (Bajra Stabilization):</strong> Pearl millet possesses high unsaturated fat content. Once milled, endogenous lipase enzymes rapidly hydrolyze triglycerides into free fatty acids, producing a bitter taste within days. Millers utilize gentle hydrothermal steaming prior to dehulling to denature lipase and extend flour shelf-life to 9 months.</li>
      </ul>

      <h2>2. Dedicated Gluten-Free Segregation</h2>
      <p>To supply certified gluten-free brand manufacturers, milling lines must maintain strict physical segregation with dedicated elevator legs, packaging hoppers, and air filtration systems to prevent cross-contact with wheat, rye, or barley.</p>
    `
  },
  {
    id: "organic-grain-certification-eu-usda",
    title: "Organic Grain Certification: EU, NOP & USDA Compliance for Global Bulk Shipments",
    category: "trading",
    categoryLabel: "Wholesale Trading",
    date: "March 18, 2026",
    author: "Elena Rostova (International Trade Director)",
    readTime: "8 min read",
    image: "assets/images/blog-organic-certification-lab.jpg",
    excerpt: "Navigating international organic chain-of-custody protocols: multi-residue pesticide screening (<0.01 ppm), inert gas fumigation alternatives, and USDA NOP transaction certificates.",
    contentHtml: `
      <p>Procuring certified organic rice, wheat, and pulses requires rigorous verification throughout every stage of the supply chain—from cluster farm auditing to dedicated container stuffing. For institutional buyers servicing European and North American retail markets, non-compliance results in automatic consignment rejection at discharge ports.</p>

      <h2>1. Chain-of-Custody (CoC) & Farm-Gate Auditing</h2>
      <p>Organic grain procurement depends on an unbroken paper trail linking certified farmer cooperatives directly to the milling complex. Under USDA National Organic Program (NOP) and EU Regulation 2018/848, every harvest batch requires:</p>
      <ul>
        <li><strong>Farm Scope Certificates:</strong> Verification that acreage has maintained zero synthetic chemical inputs for a mandatory 36-month transition period.</li>
        <li><strong>Batch Transaction Certificates (TC):</strong> Digital track-and-trace certificates confirming physical volume transferred from farm-gate to mill terminal.</li>
        <li><strong>Multi-Residue Pesticide Screen (LC-MS/MS):</strong> Quantitative testing confirming zero synthetic chemical residues above the ultra-trace 0.01 mg/kg limit.</li>
      </ul>

      <h2>2. Zero-Chemical Pest Management in Transit</h2>
      <p>Conventional bulk sea freight commonly utilizes Aluminium Phosphide fumigation tablets. For organic grain shipments, synthetic chemical fumigation is strictly prohibited. Wholesale processors utilize controlled atmospheric storage: replacing oxygen with food-grade carbon dioxide (CO2) or pressurized nitrogen gas inside hermetic liners, effectively eliminating weevil eggs and larvae without chemical residue.</p>
    `
  },
  {
    id: "mandi-auctions-vs-forward-contracts",
    title: "Mandi Spot Auctions vs Forward Price Locks: Hedging Margins in Volatile Harvest Seasons",
    category: "trading",
    categoryLabel: "Wholesale Trading",
    date: "February 24, 2026",
    author: "David Bradley (Commodity Trading Desk)",
    readTime: "6 min read",
    image: "assets/images/blog-mandi-trading.jpg",
    excerpt: "How institutional grain distributors balance spot market buying during peak arrivals with 30-to-60 day forward price contracts to protect against off-season inflationary surges.",
    contentHtml: `
      <p>Commercial grain procurement requires continuous risk mitigation. In agricultural commodities characterized by single-harvest production cycles and year-round continuous consumption, seasonal price swings can devastate supermarket margins and food service contracts.</p>

      <h2>1. The Spot Market Disadvantage During Off-Season Surges</h2>
      <p>Procuring solely on spot mill-gate rates delivers bottom-dollar prices during peak harvest windows (October–December for Kharif paddy; April–May for Rabi wheat). However, as regional mandi arrivals dry up by mid-season, spot prices routinely surge 12% to 25%, forcing unhedged distributors to absorb margin compression.</p>

      <h2>2. Structured Forward Pricing Agreements</h2>
      <p>Leading wholesale buyers partner with primary millers through structured forward price agreements. Under this arrangement, the processor procures standing grain allocations at peak harvest and stores the volume in climate-controlled godowns, billing the buyer at a guaranteed fixed per-ton rate with pre-scheduled bi-weekly or monthly container dispatches.</p>
    `
  },
  {
    id: "optical-sortex-defect-calibration",
    title: "Buhler Optical Color Sorter Calibration: Eliminating Chalky, Discolored, and Pecks in Rice",
    category: "milling",
    categoryLabel: "Milling & Quality",
    date: "January 14, 2026",
    author: "Rajeshwar Rao (Chief Milling Technologist)",
    readTime: "9 min read",
    image: "assets/images/blog-buhler-optical-sorter.jpg",
    excerpt: "Engineering deep-dive into full-color RGB cameras, InGaAs infrared illumination, and ultra-high-speed pneumatic rejector valves that achieve 99.4%+ Sortex optical purity.",
    contentHtml: `
      <p>Modern export specifications for Basmati and premium non-basmati rice allow virtually zero tolerance for discolored kernels, chalky grains, or foreign matter. Optical color sorting stands as the ultimate defense line between commercial milling lines and export sea containers.</p>

      <h2>1. Tri-Chromatic RGB Camera & InGaAs Sensor Synergy</h2>
      <p>Standard color sorters rely solely on visible RGB wavelengths. However, defective grains like chalky kernels (immature starch lacking density) or internal peck damage caused by stinkbugs often possess surface coloration identical to healthy grains under standard lighting. Advanced sorting decks combine:</p>
      <ul>
        <li><strong>High-Resolution RGB Cameras:</strong> Detecting dark spots, tip pecks, and foreign stones down to 0.1 mm precision.</li>
        <li><strong>InGaAs Short-Wave Infrared (SWIR):</strong> Penetrating the kernel to differentiate between inorganic glass/plastics and rice kernels based on light absorption spectra.</li>
        <li><strong>Pneumatic Ejector Valves:</strong> High-frequency nozzles operating at 1,000 actuations per second, ejecting pinpoint defects into secondary recovery streams with minimal good-grain loss.</li>
      </ul>
    `
  }
];

// Initialize Blog Listing and Details
document.addEventListener('DOMContentLoaded', () => {
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid) {
    initBlogListing();
  }

  const articleContainer = document.getElementById('article-detail-container');
  if (articleContainer) {
    loadArticleDetail();
  }
});

function initBlogListing() {
  const blogGrid = document.getElementById('blog-grid');
  const searchInput = document.getElementById('blog-search');
  const categoryBtns = document.querySelectorAll('.blog-filter-btn');
  const countDisplay = document.getElementById('blog-count-display');

  if (!blogGrid) return;

  // URL query parameter routing for deep-linking from sidebar or footer
  const urlParams = new URLSearchParams(window.location.search);
  const paramCategory = urlParams.get('category');
  const paramSearch = urlParams.get('search');

  let currentCategory = (paramCategory && ['varieties', 'milling', 'trading', 'logistics'].includes(paramCategory)) ? paramCategory : 'all';
  let searchQuery = paramSearch ? paramSearch.toLowerCase().trim() : '';

  if (currentCategory !== 'all') {
    categoryBtns.forEach(btn => {
      if (btn.getAttribute('data-category') === currentCategory) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    setTimeout(() => {
      const filterSection = document.getElementById('blog-grid-section');
      if (filterSection) {
        filterSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  }

  if (paramSearch && searchInput) {
    searchInput.value = paramSearch;
  }

  function renderArticles() {
    const filtered = wholesaleArticles.filter(art => {
      const matchCat = (currentCategory === 'all' || art.category === currentCategory);
      const matchQuery = !searchQuery || 
        art.title.toLowerCase().includes(searchQuery) ||
        art.excerpt.toLowerCase().includes(searchQuery) ||
        art.categoryLabel.toLowerCase().includes(searchQuery);
      return matchCat && matchQuery;
    });

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} article${filtered.length !== 1 ? 's' : ''}`;
    }

    if (filtered.length === 0) {
      blogGrid.innerHTML = `
        <div class="col-12 py-5 text-center">
          <i class="bi bi-journal-x text-muted" style="font-size: 3rem;"></i>
          <h4 class="mt-3">No Industry Articles Found</h4>
          <p class="text-muted">Try adjusting your search query or selecting a different category filter.</p>
          <button class="btn btn-wholesale-secondary mt-2" onclick="resetBlogFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    blogGrid.innerHTML = filtered.map(art => `
      <div class="col-lg-4 col-md-6 mb-4">
        <article class="card blog-card h-100 shadow-sm border-0">
          <div class="blog-card-image-wrap">
            <img src="${art.image}" alt="${art.title}" class="card-img-top blog-card-img" loading="lazy">
          </div>
          <div class="card-body blog-card-body d-flex flex-column">
            <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
              <span class="badge bg-light text-primary border">${art.categoryLabel}</span>
              <span class="small text-muted"><i class="bi bi-clock me-1"></i>${art.readTime}</span>
              <span class="small text-muted ms-auto"><i class="bi bi-calendar3 me-1"></i>${art.date}</span>
            </div>
            <h5 class="card-title fw-bold blog-card-title mb-2">
              <a href="blog-details.html?id=${art.id}" class="text-decoration-none text-main">
                ${art.title}
              </a>
            </h5>
            <p class="card-text text-muted blog-card-excerpt small flex-grow-1">
              ${art.excerpt}
            </p>
            <div class="pt-3 border-top mt-auto d-flex align-items-center justify-content-between">
              <span class="small text-muted"><i class="bi bi-person me-1"></i>${art.author.split('(')[0].trim()}</span>
              <a href="blog-details.html?id=${art.id}" class="btn-link text-primary fw-semibold small text-decoration-none">
                Read More <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
    `).join('');
  }

  // Event Listeners for Filters
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderArticles();
    });
  });

  // Search Input Listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderArticles();
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') e.preventDefault();
    });
  }

  window.resetBlogFilters = function() {
    currentCategory = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    categoryBtns.forEach(b => {
      if (b.getAttribute('data-category') === 'all') b.classList.add('active');
      else b.classList.remove('active');
    });
    renderArticles();
  };

  renderArticles();
}

function loadArticleDetail() {
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get('id') || 'milling-and-sortex-cleaning-technology';

  const article = wholesaleArticles.find(a => a.id === articleId) || wholesaleArticles[0];

  // Update Breadcrumb & Document Title
  document.title = `${article.title} - AgroGrains Insights`;
  const breadcrumbCurrent = document.getElementById('article-breadcrumb-current');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = article.title;

  // Injected Elements
  const heroTitleEl = document.getElementById('hero-article-title');
  const titleEl = document.getElementById('article-title');
  const catEl = document.getElementById('article-category-badge');
  const dateEl = document.getElementById('article-date');
  const readTimeEl = document.getElementById('article-read-time');
  const authorEl = document.getElementById('article-author');
  const imgEl = document.getElementById('article-featured-image');
  const contentEl = document.getElementById('article-content-body');

  if (heroTitleEl) heroTitleEl.textContent = article.title;
  if (titleEl) titleEl.textContent = article.title;
  if (catEl) catEl.textContent = article.categoryLabel;
  if (dateEl) dateEl.textContent = article.date;
  if (readTimeEl) readTimeEl.textContent = article.readTime;
  if (authorEl) authorEl.textContent = article.author;
  if (imgEl) {
    imgEl.src = article.image;
    imgEl.alt = article.title;
  }
  if (contentEl) contentEl.innerHTML = article.contentHtml;

  const relatedGrid = document.getElementById('related-articles-grid');
  if (relatedGrid) {
    const related = wholesaleArticles.filter(a => a.id !== article.id).slice(0, 3);
    relatedGrid.innerHTML = related.map(rel => `
      <div class="col-md-4">
        <div class="card blog-card h-100 shadow-sm border-0">
          <div class="blog-card-image-wrap">
            <img src="${rel.image}" alt="${rel.title}" class="card-img-top blog-card-img" loading="lazy">
          </div>
          <div class="card-body blog-card-body d-flex flex-column p-3">
            <div class="d-flex align-items-center gap-2 mb-2">
              <span class="badge bg-light text-primary border">${rel.categoryLabel}</span>
              <span class="small text-muted ms-auto">${rel.readTime}</span>
            </div>
            <h6 class="card-title fw-bold mb-2">
              <a href="blog-details.html?id=${rel.id}" class="text-decoration-none text-main">${rel.title}</a>
            </h6>
            <p class="small text-muted mb-3 flex-grow-1">${rel.excerpt.slice(0, 100)}...</p>
            <a href="blog-details.html?id=${rel.id}" class="text-primary fw-semibold small text-decoration-none mt-auto">
              Read Analysis &rarr;
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Update Insight Categories Widget with Dynamic Counts and Direct Filter Redirection
  const sidebarCatList = document.getElementById('sidebar-categories-list');
  if (sidebarCatList) {
    const categoryCounts = {
      varieties: wholesaleArticles.filter(a => a.category === 'varieties').length,
      milling: wholesaleArticles.filter(a => a.category === 'milling').length,
      trading: wholesaleArticles.filter(a => a.category === 'trading').length,
      logistics: wholesaleArticles.filter(a => a.category === 'logistics').length
    };

    sidebarCatList.innerHTML = `
      <li class="py-2 border-bottom border-subtle d-flex justify-content-between align-items-center">
        <a href="blog.html?category=varieties#blog-grid-section" class="text-main fw-semibold text-decoration-none">Rice Varieties &amp; AGL</a>
        <span class="badge sidebar-category-badge">${categoryCounts.varieties} Articles</span>
      </li>
      <li class="py-2 border-bottom border-subtle d-flex justify-content-between align-items-center">
        <a href="blog.html?category=milling#blog-grid-section" class="text-main fw-semibold text-decoration-none">Milling &amp; Sortex Optics</a>
        <span class="badge sidebar-category-badge">${categoryCounts.milling} Articles</span>
      </li>
      <li class="py-2 border-bottom border-subtle d-flex justify-content-between align-items-center">
        <a href="blog.html?category=trading#blog-grid-section" class="text-main fw-semibold text-decoration-none">Wholesale Trading &amp; Pricing</a>
        <span class="badge sidebar-category-badge">${categoryCounts.trading} Articles</span>
      </li>
      <li class="py-2 d-flex justify-content-between align-items-center">
        <a href="blog.html?category=logistics#blog-grid-section" class="text-main fw-semibold text-decoration-none">Grain Storage &amp; Warehousing</a>
        <span class="badge sidebar-category-badge">${categoryCounts.logistics} Articles</span>
      </li>
    `;
  }
}
