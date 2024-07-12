// SuratPengantarForm.js
import React, { useState } from 'react';

const SuratPengantarForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({

    Keterangn:'',
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
        <label>Jenis Surat:</label>
        <input type="text" name="Jenis Surat" value={formData.JenisSurat} onChange={handleChange} required />
      </div>
      <div>
        <label>Nama:</label>
        <input type="text" name="nama" value={formData.nama} onChange={handleChange} required />
      </div>
      <div>
        <label>Tempat Tanggal Lahir:</label>
        <input type="text" name="tempatTanggalLahir" value={formData.tempatTanggalLahir} onChange={handleChange} required />
      </div>
      <div>
        <label>Nik:</label>
        <input type="text" name="Nik" value={formData.Nik} onChange={handleChange} required />
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

export default SuratPengantarForm;
