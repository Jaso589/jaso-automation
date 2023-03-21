import Layout from '@/components/Layout'
import Style from '@/styles/Blog.module.css'

const Blog = () => {
  return (
    <Layout>
        <section className={Style.blog}>
        <div className='container'>
          <h1>Quienes somos</h1>
        </div>
      </section>
    </Layout>
  )
}

export default Blog