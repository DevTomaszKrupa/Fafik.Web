import React, { Fragment, useEffect } from 'react';

import { useDocumentTitle } from '../../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/reducers';
import AdminTitleSection from '../shared/AdminTitleSection';
import AdminButton from '../shared/AdminButton';
import components from './styles';


const AdminBlogComponent = () => {
    useDocumentTitle('Blog');
    const dispatch = useDispatch();
    const adminBlogState = useSelector((state: AppState) => state.adminBlogState);
    useEffect(() => {
        dispatch({ type: 'ADMIN_BLOCK_GET_POSTS_STARTED' });
    }, []);

    const {
        AdminCheckbox,
        Checkbox,
        AdminEditButtonsInputs,
        SearchBox,
        SearchInput,
        SearchButton,
        TableCheckbox,
        TableInfoBox,
        DateTitleBox,
        PostDate,
        PostTitle,
        OptionBox,
    } = components;
    return (
        <Fragment>
            <div>
                {adminBlogState.isLoading && <div> loading </div>}
                {!adminBlogState.isLoading && <Fragment>
                    <AdminTitleSection title="Zarządzanie blogiem" />
                    <AdminEditButtonsInputs>
                        <AdminCheckbox>
                            <Checkbox type="checkbox" />
                        </AdminCheckbox>
                        <AdminButton buttonStyle="gray" buttonText="Opublikuj" />
                        <AdminButton buttonStyle="gray" buttonText="Usuń" />
                        <AdminButton buttonStyle="pink" buttonText="Nowy post" />
                        <SearchBox>
                            <SearchInput />
                            <SearchButton></SearchButton>
                        </SearchBox>
                    </AdminEditButtonsInputs>
                    <TableCheckbox>
                        <Checkbox type="checkbox" />
                    </TableCheckbox>
                    <TableInfoBox>
                        <DateTitleBox>
                            <PostDate>21.05.2020</PostDate>
                            <PostTitle>Klaudynka to ja. Zobacz jak sobie żyję.</PostTitle>
                        </DateTitleBox>
                        <OptionBox>WYŚWIETL | EDYTUJ | USUŃ</OptionBox>
                    </TableInfoBox>

                    {adminBlogState.posts.map(post => <div>{post.title} </div>)}
                </Fragment>
                }
            </div>
        </Fragment>
    );
};

export default AdminBlogComponent;
