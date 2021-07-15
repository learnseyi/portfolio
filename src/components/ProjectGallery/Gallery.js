import React from 'react';
import {Container,Row,Col,Image,Button} from 'react-bootstrap';
import omnifoods from './Thumbnail/omnifoods.PNG';
import fashioncode from './Thumbnail/fashioncode.PNG';
import slimFinancial from './Thumbnail/slim-financial.PNG'
import './Gallery.css';

const Gallery = ()=>{
    return(
        <Container fluid className='gallery-container'>
            <div className='heading'>
                <h1>Project Gallery</h1>
            </div>
            <Row >
                <Col className="col col-sm-12 col-md-6">
                    <div >
                    <a href='https://omnifoods-1.netlify.app/' target='_blank' rel="noreferrer"><h4 >Omnifoods</h4></a>
                    <Image className='img-style' src={omnifoods}  />
                    <div className='d-flex justify-content-center pt-3'>
                    <Button className='button'size='sm'>Technical information</Button>
                    </div>
                    </div>
                </Col>
                <Col className="col col-sm-12 col-md-6">
                <a href='https://fashioncode-v2.netlify.app/' target='_blank' rel="noreferrer"><h4 >Fashioncode</h4></a>
                <div >
                <Image className='img-style-2' src={fashioncode} />
                    <div className='d-flex justify-content-center  pt-3'>
                    <Button className='button'size='sm'>Technical information</Button>
                    </div>
                    </div>
                </Col>
                <Col className="col col-sm-12 col-md-6">
                <a href='https://slimfinancial.netlify.app/' target='_blank' rel="noreferrer"><h4 >Slim Financial</h4></a>
                <div >
                <Image className='img-style' src={slimFinancial} />
                    <div className='d-flex justify-content-center  pt-3'>
                    <Button className='button'size='sm'>Technical information</Button>
                    </div>
                    </div>
                </Col>
                <col className="col col-sm-12 col-md-6"></col>
                
            </Row>
        </Container>
    )
}

export default Gallery