import Navbar from '../shumaComponents/Navbar';
import Footer from '../shumaComponents/Footer';
import styled, { createGlobalStyle, css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useAuth } from '../firebase/authContext';

function SingleProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [product, setProduct] = useState(location.state.product);
  const [mainImg, setMainImg] = useState(product.img);
  const [fade, setFade] = useState(false);
  const [products, setProducts] = useState([]);
  const [otherImages, setOtherImages] = useState(product.otherImages);
  const [size, setSize] = useState(product.sizes);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [buttonText, setButtonText] = useState('Додади во кошничка');
  const [fadeText, setFadeText] = useState(false);

  let currentProduct = ''

  const availableSizes = ['XS', 'S', 'M', 'L', 'XL'];
  const mlSizes = ['125ml', '250ml', '350ml'];
  const handleImageClick = (img) => {
    setFade(true);
    setTimeout(() => {
      setMainImg(img);
      setFade(false);
    }, 300);
  };

  const handleChangeImageClick = (product) => {
    setFade(true);
    setTimeout(() => {
      setMainImg(product.img);
      setProduct(product);
      setOtherImages(product.otherImages);
      setSize(product.sizes);
      setSelectedSize(null);
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    fetch('../../public/products.json')
      .then((response) => response.json())
      .then((json) => {
        const sugested = json.filter(
          (produkt) => produkt.type === product.type
        );
        setProducts(sugested);
      });
  }, []);
  const handleSizeClick = (sizeLabel) => {
    setSelectedSize(sizeLabel);
  };

  const handleAddToCart = async () => {
    if (!currentUser) {
      navigate('/register');
      return;
    }
    if (!selectedSize) {
      alert('Ве молиме изберете големина');
      return;
    }

    try {
      const cartRref = collection(db, 'shoppingCart');
      const q = query(
        cartRref,
        where('name', '==', product.name),
        where('selectedSize', '==', selectedSize)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const existingDoc = querySnapshot.docs[0];
        const existingData = existingDoc.data();
        await updateDoc(existingDoc.ref, {
          selected: existingData.selected + 1,
        });
      } else {
        await addDoc(cartRref, {
          ...product,
          selectedSize,
          selected: 1,
        });
      }

      setFadeText(true);
      setTimeout(() => {
        setButtonText('Успешно додадено');
        setShowCheckmark(true);
        setFadeText(false);
      }, 300);
      setTimeout(() => {
        setFadeText(true);
        setTimeout(() => {
          setShowCheckmark(false);
          setButtonText('Додади во кошничка');
          setFadeText(false);
        }, 300);
      }, 3000);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainWrapper>
        <PicturesWrapper>
          <MainPictureWrapper>
            <img
              src={mainImg}
              alt="mainPicture"
              className={`mainImg ${fade ? 'fade-out' : 'fade-in'}`}
            />
          </MainPictureWrapper>
          <OtherPicturesWrapper>
            {product.otherImages &&
              product.otherImages.map((img, index) => (
                <div
                  className="otherImg"
                  style={{
                    border:
                      img === mainImg
                        ? '2px solid  var(--section-white)'
                        : '1px solid black',
                    boxShadow:
                      img === mainImg
                        ? '0 0 10px rgba(11, 119, 111, 0.3)'
                        : 'none',
                  }}
                  onClick={() => handleImageClick(img)}
                >
                  <img src={img} alt="otherPicture" key={index} />
                  {console.log(img)}
                </div>
              ))}
          </OtherPicturesWrapper>
        </PicturesWrapper>
        <InfoWrapper>
          <h3>{product.name}</h3>
          <p className="cena">
            <span
              style={{
                fontStyle: 'italic',
                color: 'black',
                fontSize: '20px',
              }}
            >
              {product.price}{' '}
            </span>
            <span
              style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}
            >
              {' '}
              ден.
            </span>
          </p>
          <p className="slicni" style={{ marginTop: '5%' }}>
            Слични производи:
          </p>

          <SuggestedWrapper>
            {products.map((suggestedProduct, index) => (
              <div
                key={index}
                className="suggestedProduct"
                style={{
                  cursor: 'pointer',
                  padding: '1%',
                  borderBottom:
                    suggestedProduct.img === mainImg
                      ? '2px solid  var(--section-white)'
                      : '',

                  borderRadius: '0% !important',
                }}
                title={suggestedProduct.name}
                onClick={() => handleChangeImageClick(suggestedProduct)}
              >
                <img src={suggestedProduct.img} alt="suggestedProduct" />
                {/* {currentProduct = suggestedProduct.type} */}
                {console.log(currentProduct = suggestedProduct.type)}
              </div>
            ))}
          </SuggestedWrapper>
          <p>Избери големина:</p>
          <SizesWrapper>
            {currentProduct === 'casi' ? (
              mlSizes.map((sizeLabel) => (
                <SizeBox
                  style={{width: '55px'}}
                  key={sizeLabel}
                  title={size.includes(sizeLabel) ? '' : 'Нема на залиха'}
                  isAvailable={size.includes(sizeLabel)}
                  isSelected={selectedSize === sizeLabel}
                  onClick={() => {
                    if (size.includes(sizeLabel)) {
                      handleSizeClick(sizeLabel);
                    }
                  }}
                >
                  {sizeLabel}
                </SizeBox>
              ))
            ) : (
              availableSizes.map((sizeLabel) => (
                <SizeBox
                  key={sizeLabel}
                  title={size.includes(sizeLabel) ? '' : 'Нема на залиха'}
                  isAvailable={size.includes(sizeLabel)}
                  isSelected={selectedSize === sizeLabel}
                  onClick={() => {
                    if (size.includes(sizeLabel)) {
                      handleSizeClick(sizeLabel);
                    }
                  }}
                >
                  {sizeLabel}
                </SizeBox>
              ))
            )}
          </SizesWrapper>
          <CartButton>
            <button onClick={handleAddToCart}>
              <TextWrapper className={fadeText ? 'fade-out' : 'fade-in'}>
                {buttonText}
                {showCheckmark ? <FaCheck style={{ marginLeft: '5px' }} /> : ''}
              </TextWrapper>
            </button>
          </CartButton>
        </InfoWrapper>
      </MainWrapper>

      <Footer />
    </>
  );
}
const TextWrapper = styled.div`
  transition: opacity 0.3s ease-in-out;
  &.fade-out {
    opacity: 0;
  }
  &.fade-in {
    opacity: 1;
  }
`;

const CartButton = styled.div`
  width: 100%;
  margin-top: 10%;
  & > button {
    width: 100%;
    height: 50px;
    background: var(--gradient);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s ease-in-out; /* Add transition for smooth effect */
    &:hover {
      background: var(--gradient-hover);
      scale: 1.05;
    }
  }
`;
const SuggestedWrapper = styled.div`
  display: flex;
  height: 20%;
  gap: 5%;

  margin-bottom: 5%;
  .suggestedProduct {
    width: 200px;
    height: 60%;
  }
  .suggestedProduct:hover {
    border: 2px solid var(--section-white);
  }
  .suggestedProduct > img {
    width: 100%;
    height: 100%;
  }
`;
const PicturesWrapper = styled.div`
  width: 40%;
  height: 80%;
  margin-left: 9%;
  border: 1px solid var(--section-white);
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SizesWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const SizeBox = styled.div`
  padding: 10px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isAvailable
      ? css`
          background-color: ${props.isSelected
          ? ' var(--section-white)'
          : 'white'};
          color: ${props.isSelected ? 'white' : 'black'};
          border: 1px solid black;
          border-radius: 0px !important;
          cursor: pointer;
          &:hover {
            background-color:  var(--section-white);
            color: white;
          }
        `
      : css`
          color: grey;
          border: 1px solid grey;
          cursor: not-allowed;
          border-radius: 0px !important;
        `}
  border-radius: 5px;
`;
const MainPictureWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  .mainImg {
    width: 80%;
    height: 90%;
    margin-top: 5%;
    transition: opacity 0.3s ease-in-out; /* Add transition for smooth fade effect */
    opacity: 1;
  }
  .fade-out {
    opacity: 0;
  }
  .fade-in {
    opacity: 1;
  }
`;
const OtherPicturesWrapper = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
  .otherImg {
    width: 20%;
    height: 70%;
    margin: 1%;
    cursor: pointer;

    border-radius: 0px !important;
    padding: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .otherImg > img {
    width: 100%;
    height: 80%;
    background-color: white;
  }
`;

const InfoWrapper = styled.div`
  width: 30%;
  height: 80%;
  margin-left: 6%;
  display: flex;
  flex-direction: column;

  .cena {
    color: grey;

    font-size: 20px;
    font-style: italic;
  }
`;

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  margin-bottom: 10%;
  position: relative;
  margin-top: 5%;
`;
export default SingleProductPage;
