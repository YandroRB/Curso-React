import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { usePostList } from '../customs/usePostList';
import HeaderArticle from './HeaderArticle';
import './Article.css';
import Footer from './Footer';

function Article() {
  const { id } = useParams<{ id: string }>();
  const [mdContent, setMdContent] = useState('');
  const { postList } = usePostList();
  useEffect(() => {
    async function fetchMD(indice: number): Promise<void> {
      try {
        const response = await fetch(postList[indice].file);
        if (!response.ok) throw new Error('Error while fetching');
        const text = await response.text();
        setMdContent(text);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    if (id !== undefined && postList.length > 0) {
      const indice = parseInt(id);
      void fetchMD(indice);
    }
  }, [postList, id]);
  return (
    <div className=" bg-sky-300">
      <HeaderArticle />
      <div className=" bg-slate-100 mx-3 mb-10 md:mx-10 rounded-md px-3 pt-9 pb-3 md:px-10 md:pb-5 markdownContainer">
        <div className=" text-gray-500 text-end ">
          <small>
            Publicado por{' '}
            <a
              className=" hover:text-blue-500 hover:font-semibold "
              href="https://github.com/YandroRB"
            >
              <img
                src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png"
                alt="User Icon"
                className=" inline-block size-8"
              />
              <span>{id && postList[parseInt(id)]?.author}</span>
            </a>
            {`, ${id && postList[parseInt(id)]?.date}`}
          </small>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {mdContent}
        </ReactMarkdown>
      </div>
      <Footer />
    </div>
  );
}

export default Article;
