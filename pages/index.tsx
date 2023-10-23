// E:\programming\Project\latexify\pages\index.tsx
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Home() {
    const [latex, setLatex] = useState('');

    useEffect(() => {
        if (window.MathJax) {
            window.MathJax.typesetPromise();
        }
    }, [latex]);

    // LaTeXのコードから\[ と \] を取り除く関数
    const formatLatex = (inputLatex) => {
        return inputLatex.replace(/\\\[|\\\]/g, '');
    };

    return (
        <>
        <Header />
        <div className="container mt-5">
            <Head>
                <title>Latexify LaTeX Renderer with Next.js</title>
            </Head>

            <h1 className="mb-5 text-center">LaTeX形式をきれいな数式に変換</h1>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header">LaTeX入力</div>
                        <div className="card-body">
                            <textarea
                                id="latex-input"
                                placeholder="LaTeXを入力してください..."
                                className="form-control"
                                value={latex}
                                onChange={(e) => setLatex(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-5">
                    <div className="card">
                        <div className="card-header">結果</div>
                        <div className="card-body">
                            <div id="output" className="border p-3" dangerouslySetInnerHTML={{ __html: latex ? `$$${formatLatex(latex)}$$` : '' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}
