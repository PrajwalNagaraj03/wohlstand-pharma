'use client';

import React, { useState } from 'react';

export default function WriteToUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'cosmetic-white-label',
    batchStage: 'idea',
    message: '',
  });
  const [status, setStatus] = useState({ submitted: false, loading: false, error: '' });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      setStatus({ ...status, error: 'Please add your name, business email, company, and project details.' });
      return;
    }

    setStatus({ submitted: false, loading: true, error: '' });
    setTimeout(() => {
      setStatus({ submitted: true, loading: false, error: '' });
    }, 900);
  };

  return (
    <div className="pharma-site">
      <section className="page-header b2b-page-header">
        <div className="container">
          <p className="eyebrow">Start a project</p>
          <h1 className="page-title">Tell WPPL what you want to develop.</h1>
          <p className="page-subtitle">
            Share your product category, stage, target market, and whether you
            need pharma research, cosmetic R&D, small-batch manufacturing, or
            white-label support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-panel">
            <p className="eyebrow">Useful details</p>
            <h2>What to include</h2>
            <ul className="partner-list compact">
              <li>Product category and intended use</li>
              <li>Custom or white-label requirement</li>
              <li>Expected sample or batch quantity</li>
              <li>Target audience or selling channel</li>
              <li>Timeline and launch stage</li>
            </ul>
            <div className="contact-note">
              <strong>Email</strong>
              <a href="mailto:info@wohlstandpharma.com">info@wohlstandpharma.com</a>
            </div>
            <div className="contact-note">
              <strong>CIN</strong>
              <span>U46497KA2023PTC175337</span>
            </div>
          </aside>

          {status.submitted ? (
            <div className="success-card">
              <div className="success-icon-wrapper">✓</div>
              <h3>Project inquiry noted</h3>
              <p>
                Your inquiry has been prepared. The next production step should
                connect this form to email or a CRM endpoint.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setStatus({ submitted: false, loading: false, error: '' });
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    projectType: 'cosmetic-white-label',
                    batchStage: 'idea',
                    message: '',
                  });
                }}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="project-form">
              {status.error && <div className="form-error-banner">{status.error}</div>}

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="name">Full name *</label>
                  <input id="name" name="name" type="text" className="form-control" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Business email *</label>
                  <input id="email" name="email" type="email" className="form-control" value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="company">Company *</label>
                  <input id="company" name="company" type="text" className="form-control" value={formData.company} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" className="form-control" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="projectType">Project type</label>
                  <select id="projectType" name="projectType" className="form-control" value={formData.projectType} onChange={handleChange}>
                    <option value="cosmetic-white-label">Cosmetic white-label</option>
                    <option value="cosmetic-custom">Custom cosmetic formulation</option>
                    <option value="cosmetic-manufacturing">Small-scale cosmetic manufacturing</option>
                    <option value="sports-cosmetics">Sports cosmetic concept</option>
                    <option value="pharma-research">Pharma research</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="batchStage">Current stage</label>
                  <select id="batchStage" name="batchStage" className="form-control" value={formData.batchStage} onChange={handleChange}>
                    <option value="idea">Idea / early brief</option>
                    <option value="sample">Need samples</option>
                    <option value="pilot">Pilot batch</option>
                    <option value="launch">Launch batch</option>
                    <option value="research">Research discussion</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project details *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Product category, target customer, batch quantity, desired timeline, and any reference products..."
                  rows={6}
                />
              </div>

              <button type="submit" className="btn btn-primary full-btn" disabled={status.loading}>
                {status.loading ? 'Preparing inquiry...' : 'Submit Project Inquiry'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
