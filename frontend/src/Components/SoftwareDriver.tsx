import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './SoftwareDriver.css';

const BASE_URL = "http://localhost:4000";

type Driver = {
  id: string;
  company: string;
  model?: string;
  category: string;
  title: string;
  version?: string;
  os?: string;
  downloadLink: string;
};

export default function SoftwareDriver() {
  const [companies, setCompanies] = useState<string[]>([]);
  const [company, setCompany] = useState('hp');
  const [category, setCategory] = useState('display');
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/drivers/companies`)
      .then((r) => setCompanies(r.data.companies))
      .catch(() => {});
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/drivers/${company}?category=${category}`)
      .then((r) => setDrivers(r.data.results))
      .catch(() => setDrivers([]));
  }, [company, category]);

  return (
    <div>
      <div className="driver-container">
        <h1 className="driver-title">Laptop Drivers Finder</h1>

        <div className="dropdown-row">
          <select
            className="dropdown"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            {companies.map((c) => (
              <option key={c} value={c}>
                {c.toUpperCase()}
              </option>
            ))}
          </select>

          <select
            className="dropdown"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="display">Display</option>
            <option value="audio">Audio</option>
            <option value="printer">Printer</option>
            <option value="network">Network</option>
          </select>
        </div>

        <div className="driver-list">
          {drivers.length === 0 && (
            <p className="no-data">No drivers found.</p>
          )}

          {drivers.map((d) => (
            <div key={d.id} className="driver-card">
              <h3>{d.title}</h3>
              <p className="driver-info">
                OS: {d.os} <br />
                Version: {d.version || "N/A"}
              </p>

              <a
                className="download-btn"
                href={d.downloadLink}
                target="_blank"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
