import React from 'react';
import {Container,Row,Col,Image,Button} from 'react-bootstrap';
import slimbook from './Thumbnail/slimbook.PNG';
import fashioncode from './Thumbnail/fashioncode.PNG';
import './Gallery.css';

const Gallery = ()=>{
    return(
        <Container fluid className='gallery-container'>
            <div className='heading'>
                <h1>Project Gallery</h1>
            </div>
            <Row >
                <Col >
                    <div >
                    <a href='https://github.com/learnseyi' target='_blank' rel="noreferrer"><h4 >Facebook Clone</h4></a>
                    <Image className='img-style' src={slimbook}  />
                    <div className='d-flex justify-content-center pt-3'>
                    <Button className='button'size='sm'>Technical information</Button>
                    </div>
                    </div>
                </Col>
                <Col>
                <a href='https://learnseyi.github.io/fashion-code-v1/' target='_blank' rel="noreferrer"><h4 >Fashioncode</h4></a>
                <div className='pt-5'>
                <Image className='img-style-2' src={fashioncode} />
                    <div className='d-flex justify-content-center  pt-3'>
                    <Button className='button'size='sm'>Technical information</Button>
                    </div>
                    </div>
                </Col>
                
            </Row>
        </Container>
    )
}

export default Gallery