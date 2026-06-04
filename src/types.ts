/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'strategy' | 'about' | 'contact';

export interface MarketMetric {
  year: string;
  dallasGrowth: number;
  nashvilleGrowth: number;
  nationalAverage: number;
}

export interface TargetCriteria {
  category: string;
  details: string;
  iconName: string;
}

export interface PropertySubmission {
  id: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: string;
  askingPrice: number;
  estimatedArv?: number; // After Repair Value
  estimatedRehab?: number;
  submitterName: string;
  submitterEmail: string;
  submitterPhone: string;
  submitterRole: 'agent' | 'wholesaler' | 'broker' | 'owner' | 'other';
  hasCommissionProtected: boolean;
  notes?: string;
  submittedAt: string;
}

export interface InvestmentCriteria {
  title: string;
  description: string;
  parameters: string[];
}
