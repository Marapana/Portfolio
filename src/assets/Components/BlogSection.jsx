import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';

const blogPosts = [
  {
    category: 'UI/UX',
    readTime: '3 min read',
    title: 'Redesigning a mobile banking app',
    desc: 'A case study on creating a more intuitive, accessible experience for everyday banking users.',
    image: '/images/blog1.jpg',
  },
  {
    category: 'WEB APP',
    readTime: '4 min read',
    title: 'Dashboard for creative teams',
    desc: 'How I built a collaborative dashboard to help teams manage projects and feedback with ease.',
    image: '/images/blog2.jpg',
  },
  {
    category: 'RESEARCH',
    readTime: '2 min read',
    title: 'User testing for e-commerce',
    desc: 'Insights from usability studies that shaped a smoother, more inclusive online shopping journey.',
    image: '/images/blog3.jpg',
  },
  {
    category: 'REACTJS',
    readTime: '5 min read',
    title: 'Portfolio site build process',
    desc: 'Behind the scenes of designing and developing a responsive, accessible portfolio from scratch.',
    image: '/images/blog4.jpg',
  },
];

const BlogSection = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-start flex-column flex-md-row mb-4">
          <div>
            <small className="text-uppercase text-muted fw-semibold">Featured Projects</small>
            <h2 className="fw-bold mt-2">Designing with empathy, building with purpose</h2>
            <p className="text-secondary">
              Explore a selection of my latest UI/UX and front-end work—crafted to blend thoughtful design with seamless user experience.
            </p>
          </div>          
        </div>

        <Row xs={1} sm={2} md={2} lg={4} className="g-4">
          {blogPosts.map((post, idx) => (
            <Col key={idx}>
              <Card className="h-100 border-0">
                <Card.Img
                  variant="top"
                  src={post.image}
                  alt={post.title}
                  style={{ borderRadius: '12px' }}
                />
                <Card.Body className="px-0">
                  <div className="d-flex gap-2 my-2">
                    <Badge bg="light" text="dark" className="fw-normal">{post.category}</Badge>
                    <small className="text-muted">{post.readTime}</small>
                  </div>
                  <Card.Title className="fw-bold fs-5">{post.title}</Card.Title>
                  <Card.Text className="text-secondary small mb-2">{post.desc}</Card.Text>
                  <a href="#" className="text-decoration-none fw-semibold">Read more &rarr;</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
