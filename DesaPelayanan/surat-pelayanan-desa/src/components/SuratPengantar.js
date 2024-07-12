//SuratPengantar.js
import React, { useState } from 'react';

const SuratPengantar = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nama: '',
    tempatTanggalLahir: '',
    kelamin: '',
    alamat: '',
    keterangan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nama:</label>
        <input type="text" name="nama" value={formData.nama} onChange={handleChange} required />
      </div>
      <div>
        <label>Tempat Tanggal Lahir:</label>
        <input type="text" name="tempatTanggalLahir" value={formData.tempatTanggalLahir} onChange={handleChange} required />
      </div>
      <div>
        <label>Kelamin:</label>
        <input type="text" name="kelamin" value={formData.kelamin} onChange={handleChange} required />
      </div>
      <div>
        <label>Alamat:</label>
        <input type="text" name="alamat" value={formData.alamat} onChange={handleChange} required />
      </div>
      <div>
        <label>Keterangan:</label>
        <input type="text" name="keterangan" value={formData.keterangan} onChange={handleChange} required />
      </div>
      <button type="submit">Buat Surat Pengantar</button>
    </form>
  );
};

export default SuratPengantar;
