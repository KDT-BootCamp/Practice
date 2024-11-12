import Post from './Post' ;


const posts = [
    {   key : "임정섭",
        writer : "임정섭",
        subject : "뷰보다 더 간단한 리액트",
    },
    {   key : "임성순",
        writer : "임성순",
        subject : "컴포넌트로부터 엘리먼트 생성하는 것" ,
    },
    {   key : "황성하",
        writer : "황성하",
        subject : "리액트를 배웁시다",
    }
];


function PostList (props) {
    

    return (
        <div>
            {
            posts.map((post) => {
                return (
                    <Post writer={post.writer} subject={post.subject}/>
                )
            })
        }
        </div>
    );
}

export default PostList ;