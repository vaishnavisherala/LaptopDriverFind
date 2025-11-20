export type Company = 'hp' | 'dell' | 'lenovo' | string;
export type Category = 'display' | 'audio' | 'network' | 'storage' | 'printer' | 'chipset' | string;
export interface DriverEntry {
  id: string;
  company: Company;
  model?: string;
  category: Category;
  title: string;
  version?: string;
  os?: string;
  releaseDate?: string;
  downloadLink: string;
  notes?: string;
}
