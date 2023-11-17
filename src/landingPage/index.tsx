export function LandingPage() {
  return (
    <>
      <img style={{ display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'}} src="assets/images/website_welcome.gif" alt="A sparkling text that reads 'Welcome to my website'"></img>
      
      <p>
      Hi there! My name is Christie Ziegler and I am a fullstack software
      developer with a focus on <b>Python, React,</b> and <b>Typescript</b>.
      Welcome to my website! I built this website using React and Typescript,
      with use of the MaterialUI component library. It is deployed as a static
      website using AWS S3 and the code is open-source and available on
      Github.
      </p>
      <div style={{display:'flex', alignItems:'center', justifyContent: 'space-around'}}>
        <div>
          <img style={{width:'300px'}} src="assets/images/mimi_rainbow.png" alt="A colored pencil illustration of a black cat biting a rainbow toy. The cat is labelled 'my cat'"></img>
          <p style={{fontSize:'14px'}}>My cat Mimi. She is 16 years old and a total cuddle bug!</p>
        </div>
        <div>
          <img style={{width:'300px'}} src="assets/images/selfportrait.png" alt="A colored pencil illustration of a person with short hair and an orange cat on their shoulder. The person is labelled 'me' and the cat is labelled 'not my cat'"></img>
          <p style={{fontSize:'14px'}}>It's me! The cat is from the shelter I volunteer at - his name is Stripe!</p>
        </div>
      </div>
      <h1>About me</h1>
      <p>
        I am a human person with interests in software development, art, video
        games, and rock collecting. I am 31 years old with about 10 years of software development experience.
        I live in the Chicago area with my cat. {" "}
        I have a bachelor's degree in Integrative Biology from UC
        Berkeley, with a particular focus on <b>evolutionary biology</b> and{" "}
        <b>botany</b>. My particular art interests are widespread and include{" "}
        <b>digital art</b>, <b>colored pencils</b>, and <b>sewing.</b> For rock
        collecting I like to pick up <b>rocks</b> on the <b>beach</b>.
      </p>
      <h2>Gender? I hardly know her!</h2>
      <p>When asked my gender, certain responses spring to mind, such as "Who's asking" and
        "What are you, a cop?". But what you have to understand is, gender is a performance,
        and I'm ditching drama class. 
        <br></br>
        In all seriousness, the truth is I don't worry about my gender very much
        at all. People look at me and assume I am female, which is fine. Most people
        use she/her pronouns for me, which is also fine, although I accept any 
        pronouns. I'm certainly not going to go out of my way to either conform to 
        or disavow any gender of any kind, simply because I have other things 
        I would rather be doing, such as picking up rocks and looking at trees.
      </p>
    </>
  );
}
