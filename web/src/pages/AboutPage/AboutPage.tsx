import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p className="font-light">
        This site was created to demonstrate my master of Redwood: Look on my
        works, ye mighty, and despair!
      </p>
    </>
  )
}

export default AboutPage
