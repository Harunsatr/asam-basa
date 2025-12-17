import React, { useState } from 'react';
import { QuizResult } from '../types';

interface PageTeacherProps {
    data: QuizResult[];
}

// Kredensial login guru
const TEACHER_CREDENTIALS = {
    username: 'gurru',
    password: 'guru123'
};

const PageTeacher: React.FC<PageTeacherProps> = ({ data }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === TEACHER_CREDENTIALS.username && password === TEACHER_CREDENTIALS.password) {
            setIsLoggedIn(true);
            setLoginError('');
        } else {
            setLoginError('Username atau password salah!');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };
    
    const downloadCSV = () => {
        const headers = ["Nama,Nilai,Persentase,Waktu"];
        const rows = data.map(d => `${d.studentName},${d.score},${d.percentage}%,${d.timestamp}`);
        const csvContent = "data:text/csv;charset=utf-8," + headers.concat(rows).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "nilai_siswa_asam_basa.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const getPercentageColor = (percentage: number) => {
        if (percentage >= 80) return 'bg-green-900/30 text-green-300 border border-green-700';
        if (percentage >= 60) return 'bg-yellow-900/30 text-yellow-300 border border-yellow-700';
        return 'bg-red-900/30 text-red-300 border border-red-700';
    };

    // Login Form
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center p-8 pb-32 animate-fade-in">
                <div className="w-full max-w-md">
                    <div className="glass rounded-2xl p-8 shadow-2xl">
                        <div className="text-center mb-8">
                            <span className="text-6xl mb-4 block">👨‍🏫</span>
                            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                Login Guru
                            </h1>
                            <p className="text-gray-400 mt-2">Masuk untuk mengakses dashboard</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Masukkan username"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
                                        placeholder="Masukkan password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                            </div>

                            {loginError && (
                                <div className="p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-300 text-sm text-center">
                                    ⚠️ {loginError}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
                            >
                                🔐 Masuk
                            </button>
                        </form>

                        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg text-center">
                            <p className="text-gray-500 text-xs">
                                Akses khusus untuk guru pengajar
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-8 pb-32 animate-fade-in">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Dashboard Guru 👨‍🏫
                        </h1>
                        <p className="text-gray-400">
                            Pantau hasil pembelajaran siswa secara real-time
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button 
                            onClick={downloadCSV}
                            disabled={data.length === 0}
                            className={`py-3 px-6 rounded-lg font-bold transition-all ${
                                data.length === 0 
                                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg hover:shadow-green-500/50 transform hover:scale-105'
                            }`}
                        >
                            📥 Download CSV
                        </button>
                        <button 
                            onClick={handleLogout}
                            className="py-3 px-6 rounded-lg font-bold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg hover:shadow-red-500/50 transform hover:scale-105 transition-all"
                        >
                            🚪 Logout
                        </button>
                    </div>
                </div>

                {/* Statistics Summary */}
                {data.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="glass p-6 rounded-xl">
                            <p className="text-gray-400 text-sm mb-2">Total Siswa</p>
                            <p className="text-3xl font-bold text-blue-400">{data.length}</p>
                        </div>
                        <div className="glass p-6 rounded-xl">
                            <p className="text-gray-400 text-sm mb-2">Rata-rata Nilai</p>
                            <p className="text-3xl font-bold text-cyan-400">
                                {(data.reduce((sum, d) => sum + d.percentage, 0) / data.length).toFixed(1)}%
                            </p>
                        </div>
                        <div className="glass p-6 rounded-xl">
                            <p className="text-gray-400 text-sm mb-2">Tuntas (≥70%)</p>
                            <p className="text-3xl font-bold text-green-400">
                                {data.filter(d => d.percentage >= 70).length}/{data.length}
                            </p>
                        </div>
                    </div>
                )}

                {/* Data Table */}
                <div className="glass rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-600">
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">No</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Nama Siswa</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Jawaban Benar</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Persentase</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Waktu</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-600">
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                                            <div className="flex flex-col items-center gap-3">
                                                <span className="text-4xl">📊</span>
                                                <p>Belum ada data siswa yang masuk.</p>
                                                <p className="text-sm text-gray-500">Data akan muncul setelah siswa menyelesaikan kuis</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    data.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).map((row, index) => (
                                        <tr key={row.id} className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{index + 1}</td>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-white">{row.studentName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{row.score}/{row.totalQuestions}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${getPercentageColor(row.percentage)}`}>
                                                    {row.percentage}%
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{new Date(row.timestamp).toLocaleString('id-ID')}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer Info */}
                {data.length > 0 && (
                    <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg text-blue-300 text-sm">
                        <p>💡 <strong>Tips:</strong> Klik tombol "Download CSV" untuk mengunduh data siswa dalam format spreadsheet yang dapat diedit di Excel atau Google Sheets.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PageTeacher;