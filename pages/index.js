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
} from '../components';

import {
  features
} from '../data';

export default function Home() {
  return (
    <Layout>
      <Sidebar />
      <Header />
      <Realtors />
      <Features features={features} />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </Layout>
  )
}
