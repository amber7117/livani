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
                  <iframe src='https://www.youtube.com/embed/bk7McNUjWgw'></iframe>
                </div>

                <div className='article-content'>
                  <div className='entry-meta'>
                    <ul>
                      <li>
                     
                        <span>Category</span>
                        <Link href='#'>
                          Fashion
                        </Link>
                      </li>
                      <li>
                      
                        <span>View</span>
                        <Link href='#'>
                          813,454
                        </Link>
                      </li>
                      <li>
                     
                        <span>Last Updated</span>
                        <Link href='#'>
                          01/14/2019
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <h3>The #1 eCommerce blog to grow your business</h3>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <blockquote>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <cite>Tom Cruise</cite>
                  </blockquote>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <ul className='wp-block-gallery columns-3'>
                    <li className='blocks-gallery-item'>
                      <figure>
                        <img
                          src='../images/blog/blog1.jpg'
                          alt='image'
                        />
                      </figure>
                    </li>

                    <li className='blocks-gallery-item'>
                      <figure>
                        <img
                          src='../images/blog/blog2.jpg'
                          alt='image'
                        />
                      </figure>
                    </li>

                    <li className='blocks-gallery-item'>
                      <figure>
                        <img
                          src='../images/blog/blog3.jpg'
                          alt='image'
                        />
                      </figure>
                    </li>
                  </ul>

                  <h3>Four major elements that we offer:</h3>

                  <ul className='features-list'>
                    <li>
                    
                      Scientific skills for getting a better result
                    </li>
                    <li>
                    
                      Communication skills to getting in touch
                    </li>
                    <li>
                    A career overview
                      opportunity available
                    </li>
                    <li>
                A good work
                      environment for work
                    </li>
                  </ul>

                  <h3>Setting the mood with incense</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <h3>The rise of marketing and why you need it</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <div className='article-footer'>
                  <div className='article-tags'>
                    <span>
                    
                    </span>

                    <Link href='#'>
                      Fashion
                    </Link>
                    <Link href='#'>
                      Games
                    </Link>
                    <Link href='#'>
                      Travel
                    </Link>
                  </div>

                  <div className='article-share'>
                    <ul className='social'>
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <Link href='#'>
                        
                          
                        </Link>
                      </li>
                      <li>
                        <Link href='#'>
                      
                          
                        </Link>
                      </li>
                      <li>
                        <Link href='#'>
                        
                         
                          
                        </Link>
                      </li>
                      <li>
                        <Link href='#'>
                      
                          
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='article-author'>
                  <div className='author-profile-header'></div>
                  <div className='author-profile'>
                    <div className='author-profile-title'>
                      <img
                        src='../images/user1.jpg'
                        className='shadow-sm'
                        alt='image'
                      />

                      <div className='author-profile-title-details d-flex justify-content-between'>
                        <div className='author-profile-details'>
                          <h4>Chris Orwig</h4>
                          <span className='d-block'>
                            Photographer, Author, Writer
                          </span>
                        </div>

                        <div className='author-profile-raque-profile'>
                          <Link href='#'>
                          
                            
                          </Link>
                        </div>
                      </div>
                    </div>
                    <p>
                      Orwig is a celebrated photographer, author, and writer who
                      brings passion to everything he does.
                    </p>
                  </div>
                </div>

                <div className='xton-post-navigation'>
                  <div className='prev-link-wrapper'>
                    <div className='info-prev-link-wrapper'>
                      <Link href='#'>
                        
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
                 
                      </Link>
                    </div>
                  </div>

                  <div className='next-link-wrapper'>
                    <div className='info-next-link-wrapper'>
                      <Link href='#'>
                      
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
