
import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

// import {useSelector, useDispatch} from 'react-redux';
// import { getProducts } from '../../redu/x/actions/productAction';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 35%;
  background-color: #fff;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
`

const Search = () => {

  const [text, setText] = useState('');

  // const {products} = useSelector(state => state.getProducts);
  // const dispatch = useDispatch();

  // useEffect(()=> {
  //   dispatch(getProducts())
  // }, [dispatch])

  // const getText = (text) => {
  //   setText(text);
  // }

        return (
            <SearchContainer>
                <InputSearchBase
                  placeholder="Search for Products, Brands and more"
                  // onChange={(e) => getText(e.target.value)}
                  value={text}
                />
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper> 
                {
                  text && 
                    <ListWrapper>
                      {
                        // products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                          <ListItem>
                            <Link
                              to={`/product/${product.id}`}
                              onClick={() => setText('')}
                              style={{textDecoration: 'none', color: 'inherit'}}
                            >
                              {product.title.longTitle}
                            </Link>
                          </ListItem>
                      }
                    </ListWrapper>
                }
            </SearchContainer>
        )

}

export default Search;