import Feed from '@components/Feed';
const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Lorem ipsum dolor sit amet, consecteur adipisicing elit. Libero vitae
        repudiandae tempora eius maiores, tempore veniam sapiente voluptatem
        soluta aperiam laborum aspernatr doloremque impedit nihil, sit explicabo
        culpa quaerat. Recusanda!
      </p>

      <Feed />
    </section>
  );
};

export default Home;
