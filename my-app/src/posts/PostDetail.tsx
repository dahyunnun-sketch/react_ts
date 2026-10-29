import { useEffect, useState } from "react";
import type { Post } from "./Posts";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
    // posts/2 - '2'는 문자열임
    const {id} = useParams<{id: string}>();
    // Post | null - null도 자료형이므로 필수 기입 !!
    const [post, setPost] = useState<Post | null>(null);
    const navigate = useNavigate();

    // 해당 id의 글 가져오기
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response =
                    await axios.get(`https://jsonplaceholder.typicode.com/posts${id}`);
                setPost(response.data); // 저장
            } catch (error) {
                alert("게시글을 가져오는 중 오류가 발생했습니다.");
            }
        };
        fetchPost(); // 호출
    }, [id])

    // 로딩되지 않았을 때 메세지 표시
    if(!post) return <div>로딩중 ...</div>

    return(
        <div>
            <h2>게시글 내용</h2>
            <p>번호: {post.id}</p>
            <p>작성자 ID: {post.userId}</p>
            <p>제목: {post.title}</p>
            <p>내용: {post.body}</p>

            {/* navigate(-1) 도 가능  */}
            <button onClick={() => navigate('/')}>뒤로가기</button>
        </div>
    )
}

export default PostDetail;