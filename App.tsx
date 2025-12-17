import React, { useState } from 'react';
import { ViewState, QuizResult } from './types';
import Navigation from './components/Navigation';
import PageHome from './components/PageHome';
import PageConcepts from './components/PageConcepts';
import PageVirtualLab from './components/PageVirtualLab';
import PageActivity from './components/PageActivity';
import PageStory from './components/PageStory';
import PageQuiz from './components/PageQuiz';
import PageTeacher from './components/PageTeacher';
import AiEditor from './components/AiEditor';
import BackgroundParticles from './components/BackgroundParticles';

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

const App: React.FC = () => {
    const [view, setView] = useState<ViewState>(ViewState.HOME);
    const [quizData, setQuizData] = useState<QuizResult[]>([]);
    const [errorState, setErrorState] = useState<ErrorBoundaryState>({ hasError: false, error: null });

    const handleSaveResult = (result: QuizResult) => {
        setQuizData(prev => [result, ...prev]);
    };

    React.useEffect(() => {
        const handleError = (event: ErrorEvent) => {
            setErrorState({ hasError: true, error: event.error });
            console.error('Uncaught error:', event.error);
        };

        window.addEventListener('error', handleError);
        return () => window.removeEventListener('error', handleError);
    }, []);

    if (errorState.hasError) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark text-white">
                <div className="text-center max-w-md p-6 glass rounded-xl">
                    <h1 className="text-3xl font-bold mb-4 text-red-400">⚠️ Error</h1>
                    <p className="text-gray-300 mb-4">Terjadi kesalahan saat memproses permintaan.</p>
                    <details className="text-left bg-gray-900 p-3 rounded mb-4 text-xs text-gray-400">
                        <summary className="cursor-pointer font-bold mb-2">Detail Error</summary>
                        <pre className="overflow-auto max-h-40">{errorState.error?.message}</pre>
                    </details>
                    <button 
                        onClick={() => {
                            setErrorState({ hasError: false, error: null });
                            setView(ViewState.HOME);
                        }}
                        className="btn-primary w-full"
                    >
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        );
    }

    const renderContent = () => {
        switch (view) {
            case ViewState.HOME: return <PageHome setView={setView} />;
            case ViewState.CONCEPTS: return <PageConcepts />;
            case ViewState.LAB: return <PageVirtualLab />;
            case ViewState.ACTIVITY: return <PageActivity />;
            case ViewState.STORY: return <PageStory />;
            case ViewState.QUIZ: return <PageQuiz saveResult={handleSaveResult} />;
            case ViewState.TEACHER: return <PageTeacher data={quizData} />;
            case ViewState.AI_EDITOR: return <AiEditor />;
            default: return <PageHome setView={setView} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans relative">
            <BackgroundParticles />
            <main className="flex-grow pt-6 relative z-10">
                {renderContent()}
            </main>
            {/* Spacer for bottom nav */}
            <div className="h-20"></div>
            <Navigation currentView={view} setView={setView} />
        </div>
    );
};

export default App;