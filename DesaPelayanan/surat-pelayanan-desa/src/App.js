import Navbar from './components/Navbar';
import WordEditor from './components/SuratPengantar';
import SuratPengantarForm from './SuratPengantarForm';
import React, { useState } from 'react';
import { jsPDF } from "jspdf";

const App = () => {
  const [suratData, setSuratData] = useState(null);
    
  const handleFormSubmit = (data) => {
    setSuratData(data);
    generatePDF(data);
  };

  const generatePDF = (data) => {
    const doc = new jsPDF();
    doc.text(`Jenis Surat: ${data.JenisSurat}`, 10, 10);
    doc.text(`Nama: ${data.nama}`, 10, 20);
    doc.text(`Tempat Tanggal Lahir: ${data.tempatTanggalLahir}`, 10, 30);
    doc.text(`Nik: ${data.Nik}`, 10, 40);
    doc.text(`Kelamin: ${data.kelamin}`, 10, 50);
    doc.text(`Alamat: ${data.alamat}`, 10, 60);
    doc.text(`Keterangan: ${data.keterangan}`, 10, 70);
    doc.save('surat_pengantar.pdf');
  };
  
function App() {
  return (
    <div className="App">
      <h1>Edit Word Document</h1>
      <WordEditor />
    </div>
  );
}

  return (
    <div>
      <Navbar />
      <SuratPengantarForm onSubmit={handleFormSubmit} />
      {suratData && (
        <div>
      <div>
      
    </div>
          <h2>Preview Surat Pengantar</h2>
          <p>Nama: {suratData.nama}</p>
          <p>Tempat Tanggal Lahir: {suratData.tempatTanggalLahir}</p>
          <p>Kelamin: {suratData.kelamin}</p>
          <p>Alamat: {suratData.alamat}</p>
          <p>Keterangan: {suratData.keterangan}</p>
        </div>
      )}
    </div>
  );
};
 
  
  export default App;

