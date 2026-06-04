/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TargetCriteria, MarketMetric } from './types';
import dallasSuburbanHome from './assets/images/dallas_suburban_home.png';
import nashvilleCraftsmanHome from './assets/images/nashville_craftsman_home.png';

export const VALUE_PROPS = [
  {
    id: 'institutional-liquidity',
    title: 'Institutional Liquidity (Fast Cash Closings)',
    description: 'Bypass legacy banking appraisal systems, rigid retail mortgage parameters, and committee processing delays. We draw directly from institutional cash reserves for guaranteed closings.',
    shortLabel: 'Institutional Speed',
    icon: 'Briefcase'
  },
  {
    id: 'underwriting-precision',
    title: 'Underwriting Precision',
    description: 'Using robust localized microdata and advanced analysis, our acquisitions desk provides written commitments within 24 hours. We identify real asset value quickly and accurately.',
    shortLabel: '24h Performance',
    icon: 'Lightning'
  },
  {
    id: 'transactional-integrity',
    title: 'Absolute Transactional Integrity',
    description: 'We respect your agent commissions and listing fees. We evaluate off-market wholesale contracts and Pocket deals with absolute discretion, delivering 100% contract execution without re-trading.',
    shortLabel: 'Commissions Guarded',
    icon: 'ShieldCheck'
  }
];

export const BUYING_CRITERIA: TargetCriteria[] = [
  {
    category: 'Asset Class',
    details: 'Exclusively detached Single-Family Residential (SFR). We bypass complex commercial, multi-family, or retail assets.',
    iconName: 'Home'
  },
  {
    category: 'Core Locations',
    details: 'Dallas-Fort Worth Metroplex (DFW) in Texas and Greater Nashville Metro Area in Tennessee.',
    iconName: 'MapPin'
  },
  {
    category: 'Property Profiles',
    details: 'Suburban development, cosmetic or physical distress, value-add retrofits, short sales, and builder closeout packages.',
    iconName: 'Sparkles'
  },
  {
    category: 'Target Pricing',
    details: 'A broad buying range from $150,000 up to $650,000 based on modern localized pricing indices.',
    iconName: 'DollarSign'
  },
  {
    category: 'Operational Integrity',
    details: 'Direct cash, no partner approvals needed. Full performance with immediate closing schedules.',
    iconName: 'Shuffle'
  }
];

export const MARKET_INSIGHTS = {
  intro: 'The Sunbelt Advantage: Data-Driven Market Selection',
  thesis: 'We target markets where massive domestic migration, robust household income, and high geographical mobility create a persistent, structural deficit in single-family housing supply.',
  threeDs: [
    {
      title: 'Structural Demographics',
      description: 'Massive inward migration vectors creating a severe, structural imbalance between residential unit supply and household formation.'
    },
    {
      title: 'Geographic Mobility',
      description: 'Fluid demographic dynamics with localized movement indexes sitting roughly 20% higher than standard US cities, supporting transactional volume.'
    },
    {
      title: 'Economic Capital Resilience',
      description: 'Vibrant local employment hubs characterized by corporate relocations, high education levels, and household incomes above national averages.'
    }
  ],
  markets: [
    {
      id: 'dfw',
      name: 'Dallas-Fort Worth-Arlington, TX Metroplex (DFW)',
      subtitle: 'THE PREMIER US DOMESTIC MIGRATION HUB',
      description: 'An economic powerhouse on track to reach 8.5 million residents. DFW leads the entire United States in Net Domestic Migration, absorbing over 270,000 residents from other states—outperforming the second-ranked US metro by approximately 40%.',
      mitigationTitle: 'Our Strategic Edge: Hyper-Velocity Peripheral Sourcing',
      mitigationDescription: 'Growth is exploding in the outer corridors. Celina, TX is ranked the fastest-growing city in the nation, documenting a 24.6% annual jump and an extraordinary 276.8% cumulative population expansion since 2020. We actively source and purchase high-yield assets in these high-velocity peripheral zones including Celina, Princeton, Melissa, Anna, and Forney.',
      stats: [
        { label: 'Metro Population', value: '8.5M' },
        { label: 'Exurb Leap (Celina)', value: '+24.6%/yr' },
        { label: 'ZORI Rent Surge', value: '+57.5%' }
      ],
      image: dallasSuburbanHome,
      demographics: {
        population: '8.5 Million',
        migration: 'DFW leads the entire USA, capturing over 270,000 out-of-state residents.',
        comparison: 'Outperforms any other US metropolitan area by ~40%.'
      },
      indicators: {
        medianValue: '$389,500',
        renterPool: 'Roughly 40% of households rent, forming a massive recurring tenant base.',
        zoriSurge: 'Zillow Observed Rent Index (ZORI) surged 57.5% over the past decade, climbing from $1,054 to $1,660.'
      },
      resilience: {
        householdIncome: '$92,733 (10% higher than the US average).',
        povertyRate: '9.7% (compared to the 12.2% national average).'
      }
    },
    {
      id: 'nashville',
      name: 'Nashville-Davidson--Murfreesboro--Franklin, TN Metro',
      subtitle: 'THE SOUTHER LANDMARK BOOM TOWN',
      description: 'A stellar Southern capital scaling past 2.15 million residents. Greater Nashville commands the highest annual net migration rate among major Southern metros at ~1.22%, placing immense structural pressure on existing single-family detached housing supply.',
      mitigationTitle: 'Our Strategic Edge: Yield Optimization in Fluid corridors',
      mitigationDescription: 'Nashville represents a highly dynamic, liquid rental market with a geographical mobility rate of 14.2% moving within the past year. Driven by a highly educated base (43.3% holding a Bachelor’s degree or higher, which is 20% above the US average), we targets high-demand single-family corridors where the Zillow Observed Rent Index (ZORI) skyrocketed by 75.2% over the last 10 years.',
      stats: [
        { label: 'Annual Migration Rate', value: '1.22%' },
        { label: 'ZORI Rent Surge', value: '+75.2%' },
        { label: 'Bachelor Holders', value: '43.3%' }
      ],
      image: nashvilleCraftsmanHome,
      demographics: {
        population: '2.15 Million+',
        migration: 'Highest net annual migration rate among major Southern metros (~1.22%).',
        comparison: 'Extremely high pressure on existing suburban housing inventory.'
      },
      indicators: {
        medianValue: '$449,300',
        renterPool: 'Extremely robust demand with renter mobility indicators indexing far above US averages.',
        zoriSurge: 'ZORI rents surged 75.2% over the last decade (from $1,117 to $1,958), outperforming Dallas and Houston.'
      },
      resilience: {
        householdIncome: 'Per Capita Income stands strong at $49,568.',
        education: '43.3% hold a Bachelor\'s degree or higher (20% above the national average).'
      }
    }
  ]
};

// Demographic Population & Investment Index comparison data for customized SVG charts
export const HISTORICAL_CHART_DATA: MarketMetric[] = [
  { year: '2023', dallasGrowth: 5.1, nashvilleGrowth: 6.2, nationalAverage: 1.8 },
  { year: '2024', dallasGrowth: 5.4, nashvilleGrowth: 6.0, nationalAverage: 1.9 },
  { year: '2025', dallasGrowth: 5.7, nashvilleGrowth: 5.8, nationalAverage: 2.1 },
  { year: '2026', dallasGrowth: 5.9, nashvilleGrowth: 5.6, nationalAverage: 2.0 }
];
