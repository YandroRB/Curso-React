import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListOfPost } from './Main';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface Props {
  postList: ListOfPost;
}
function Article({ postList }: Props) {
  const { id } = useParams<{ id: string }>();
  const [mdContent, setMdContent] = useState('');
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
    if (id !== undefined) {
      const indice = parseInt(id);
      void fetchMD(indice);
    }
  }, [postList, id]);
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {mdContent}
      </ReactMarkdown>
    </div>
  );
}

export default Article;
