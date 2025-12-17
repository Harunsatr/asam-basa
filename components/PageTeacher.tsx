import React from 'react';
import { QuizResult } from '../types';

interface PageTeacherProps {
    data: QuizResult[];
}

const PageTeacher: React.FC<PageTeacherProps> = ({ data }) => {
    
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
    );
};

export default PageTeacher;