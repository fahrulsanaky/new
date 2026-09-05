/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Beranda from './halamans/Beranda';
import TentangKami from './halamans/TentangKami';
import ProgramPelatihan from './halamans/ProgramPelatihan';
import Jadwal from './halamans/Jadwal';
import InhouseTraining from './halamans/InhouseTraining';
import KontakKami from './halamans/KontakKami';
import DetailProgram from './halamans/DetailProgram';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/program-pelatihan" element={<ProgramPelatihan />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/inhouse-training" element={<InhouseTraining />} />
        <Route path="/kontak-kami" element={<KontakKami />} />
        <Route path="/detail-program" element={<DetailProgram />} />
        <Route path="/detail-pelatihan" element={<DetailProgram />} />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}


