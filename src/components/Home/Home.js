import Panel from '../Panel/Panel';
import Post from '../Post/Post';

const Home = () => {
  return (
    <>
      <Panel>
        <Post 
          title="What does the fox say?" 
          votes={34} 
          author="ac" 
          date="13.02.2023" 
          commentAmount={34}
        >
          Guys! So I was in shower lasta day and it just popped in y head. What does the fox say? Like really. How do they sound when thay speak. I know about dogs, cats, mouse, cow, etc. but fox! Never heard of it.<br/>Anyways, if any of you huys have idea. Let me know in the comments. Thanks in advance.
        </Post>
      </Panel>
      <Panel>
        <Post 
          title="Who was the first guy to land on the moon?" 
          votes={34} 
          author="ac" 
          date="13.02.2023" 
          commentAmount={34}
        >
          Okay. This is emberrassing but i forgot the name og the guy who landed on the moon the first time. <br />Sorry if this sounds silly.
        </Post>
      </Panel>
      <Panel>
        <Post 
          title="What does the fox say?" 
          votes={34} 
          author="ac" 
          date="13.02.2023" 
          commentAmount={34}
        >
          Guys! So I was in shower lasta day and it just popped in y head. What does the fox say? Like really. How do they sound when thay speak. I know about dogs, cats, mouse, cow, etc. but fox! Never heard of it.<br/>Anyways, if any of you huys have idea. Let me know in the comments. Thanks in advance.
        </Post>
      </Panel>
      <Panel>
        <Post 
          title="Who was the first guy to land on the moon?" 
          votes={34} 
          author="ac" 
          date="13.02.2023" 
          commentAmount={34}
        >
          Okay. This is emberrassing but i forgot the name og the guy who landed on the moon the first time. <br />Sorry if this sounds silly.
        </Post>
      </Panel>
    </>
  )
}

export default Home;