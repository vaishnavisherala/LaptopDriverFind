import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { DriverEntry } from '../types/driver';
import { normalize } from '../utils/normalize';
const DATA_PATH = path.join(__dirname, '..', 'data', 'drivers.json');
function readDrivers(): DriverEntry[] {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  const items: DriverEntry[] = JSON.parse(raw);
  return items;
}
export function listCompanies(req: Request, res: Response) {
  const items = readDrivers();
  const companies = Array.from(new Set(items.map(i => normalize(i.company))));
  res.json({ companies });
}
export function searchDrivers(req: Request, res: Response) {
  const { company } = req.params;
  const { category, q, model } = req.query;
  const items = readDrivers();
  let results = items;
  if (company) {
    results = results.filter(r => normalize(r.company) === normalize(String(company)));
  }
  if (category) {
    results = results.filter(r => normalize(r.category) === normalize(String(category)));
  }
  if (model) {
    const m = normalize(String(model));
    results = results.filter(r => r.model && normalize(String(r.model)).includes(m));
  }
  if (q) {
    const qq = normalize(String(q));
    results = results.filter(r => (r.title && normalize(r.title).includes(qq)) || (r.notes && normalize(r.notes).includes(qq)));
  }
  res.json({ count: results.length, results });
}
export function getDriverById(req: Request, res: Response) {
  const { id } = req.params;
  const items = readDrivers();
  const found = items.find(i => i.id === id);
  if (!found) return res.status(404).json({ error: 'Driver not found' });
  res.json(found);
}
