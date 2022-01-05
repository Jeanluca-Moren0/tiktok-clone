import Layout from "../components/Layout"
import Feed from '../components/Feed';
import Suggestions  from '../components/Suggestions'


export default function Index({posts}){
  return( 
  <Layout>
    <Feed posts={posts}></Feed>
    <Suggestions></Suggestions>
  </Layout>
  )
};


export async function getServerSideProps(context) {
  const data = [
      {
        id: 1,
        author: {
          id: 1,
          avatar:
            'https://avatars.githubusercontent.com/u/53027683?v=4',
          name: 'Morenoj',
          username: 'Jeanluca Moreno',
        },
        description: 'Video engraçado',
        tags: [{ title: '#youtube' }, { title: '#boink' }],
        songName: 'BOINK',
        videoUrl:
          '/videos/v1.mp4',
        likes: 630,
        comments: 10,
        replies: 50,
      },
      {
        id: 2,
        author: {
          id: 1,
          avatar:
            'http://pm1.narvii.com/6616/4e1251dcbb7b1584a37891fe6f24db1ef418e085_00.jpg',
          name: 'JohnDoe',
          username: 'John Doe',
        },
        description: 'Esse tem o drip',
        tags: [{ title: '#youtube' }, { title: '#jogatchuca' }],
        songName: 'Então joga tchuca',
        videoUrl:
          '/videos/v2.mp4',
        likes: 670,
        comments: 120,
        replies: 20,
      },
    ];

  
  return {
    props: {
      posts: data,
    }, 
  }
}