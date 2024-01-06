import React, { Component } from 'react';
import Link from 'next/link';
import CommentsList from './CommentsList';
import BlogSidebar from '../Blog/BlogSidebar';
class BlogDetailsTwo extends Component {
render() {
return (
<section className='blog-details-area ptb-100'>
   <div className='container'>
      <div className='row'>
         <div className='col-lg-8 col-md-12'>
            <div className='blog-details-desc'>
               <div className='article-video'>
                  <iframe src="https://www.pornhub.com/embed/64bab88ec37ef"></iframe>
               </div>
               <div className='article-video'>
                  <iframe src="https://www.pornhub.com/embed/65781ff4aa1f0" frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>
               </div>
               <div className='article-video'>
                  <iframe src="https://www.pornhub.com/embed/64da8334365f7" frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>
               </div>
               <div className='article-video'>
                  <iframe src="https://www.pornhub.com/embed/6478b624850bf" frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>
               </div>
               <div className='article-video'>
                  <iframe src="https://www.pornhub.com/embed/657b20c45d388" frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>
               </div>
               <div className='article-video'>
                  <iframe src="https://www.pornhub.com/embed/65687ea9e3e96" frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>
               </div>
               <div className='article-video'>
                  <iframe src="https://www.pornhub.com/embed/ph6149f33dcbe3a" frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>
               </div>
               <div className='article-video'>
                  <iframe src="https://www.pornhub.com/embed/65769e14ee10c" frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>
               </div>
               <div className='article-content'>
                  <div className='entry-meta'>
                     <ul>
                        <li>
                           <i className='bx bx-folder-open'></i>
                           <span>Category</span>
                           <Link href='#'>
                           <a>Fashion</a>
                           </Link>
                        </li>
                        <li>
                           <i className='bx bx-group'></i>
                           <span>View</span>
                           <Link href='#'>
                           <a>813,454</a>
                           </Link>
                        </li>
                        <li>
                           <i className='bx bx-calendar'></i>
                           <span>Last Updated</span>
                           <Link href='#'>
                           <a>01/14/2019</a>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className='article-footer'>
                  <div className='article-tags'>
                     <span>
                     <i className='bx bx-purchase-tag'></i>
                     </span>
                     <Link href='#'>
                     <a>Fashion</a>
                     </Link>
                     <Link href='#'>
                     <a>Games</a>
                     </Link>
                     <Link href='#'>
                     <a>Travel</a>
                     </Link>
                  </div>
                  <div className='article-share'>
                     <ul className='social'>
                        <li>
                           <span>Share:</span>
                        </li>
                        <li>
                           <Link href='#'>
                           <a className='facebook' target='_blank'>
                           <i className='bx bxl-facebook'></i>
                           </a>
                           </Link>
                        </li>
                        <li>
                           <Link href='#'>
                           <a className='twitter' target='_blank'>
                           <i className='bx bxl-twitter'></i>
                           </a>
                           </Link>
                        </li>
                        <li>
                           <Link href='#'>
                           <a className='linkedin' target='_blank'>
                           <i className='bx bxl-linkedin'></i>
                           </a>
                           </Link>
                        </li>
                        <li>
                           <Link href='#'>
                           <a className='instagram' target='_blank'>
                           <i className='bx bxl-instagram'></i>
                           </a>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className='xton-post-navigation'>
                  <div className='prev-link-wrapper'>
                     <div className='info-prev-link-wrapper'>
                        <Link href='#'>
                        <a>
                        <span className='image-prev'>
                        <img
                           src='../images/blog/blog5.jpg'
                           alt='image'
                           />
                        <span className='post-nav-title'>Prev</span>
                        </span>
                        <span className='prev-link-info-wrapper'>
                        <span className='prev-title'>
                        Latest ecommerce trend: The rise of shoppable
                        posts
                        </span>
                        <span className='meta-wrapper'>
                        <span className='date-post'>
                        January 21, 2020
                        </span>
                        </span>
                        </span>
                        </a>
                        </Link>
                     </div>
                  </div>
                  <div className='next-link-wrapper'>
                     <div className='info-next-link-wrapper'>
                        <Link href='#'>
                        <a>
                        <span className='next-link-info-wrapper'>
                        <span className='next-title'>
                        Building eCommerce wave: Social media shopping
                        </span>
                        <span className='meta-wrapper'>
                        <span className='date-post'>
                        January 19, 2020
                        </span>
                        </span>
                        </span>
                        <span className='image-next'>
                        <img
                           src='../images/blog/blog6.jpg'
                           alt='image'
                           />
                        <span className='post-nav-title'>Next</span>
                        </span>
                        </a>
                        </Link>
                     </div>
                  </div>
               </div>
               {/* Comments List */}
               <CommentsList />
            </div>
         </div>
         <div className='col-lg-4 col-md-12'>
            {/* Blog Sidebar */}
            <BlogSidebar />
         </div>
      </div>
   </div>
</section>
)
}
}
export default BlogDetailsTwo;
