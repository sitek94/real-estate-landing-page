import {
  Features,
  Footer,
  Gallery,
  Header,
  Homes,
  Layout,
  Realtors,
  Sidebar,
  Story,
} from '../layout';

export default function Home() {
  return (
    <Layout>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </Layout>
  )
}
