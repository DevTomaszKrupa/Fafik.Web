import React, { Fragment, useEffect } from 'react';
import moment from 'moment';
import { history } from '../../../helpers';

import { useDocumentTitle } from '../../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/reducers';
import AdminTitleSection from '../shared/AdminTitleSection';
import AdminButton from '../shared/AdminButton';
import { BlogPost } from '../../../store/admin/blog/reducers';
import components from './styles';
import { adminSidePanelPaths } from '../AdminPage/consts';

const AdminBlogComponent = () => {
    useDocumentTitle('Blog');
    const dispatch = useDispatch();
    const adminBlogState = useSelector((state: AppState) => state.adminBlogState);
    const { posts, isLoading, isAllChecked } = adminBlogState;
    useEffect(() => {
        dispatch({ type: 'ADMIN_BLOG_GET_POSTS_STARTED' });
    }, []);

    const CheckAll = (event: any) => {
        dispatch({ type: 'ADMIN_BLOG_CHANGE_ALL_POSTS_CHECK', payload: event.target.checked });
    };

    const CheckSingle = (post: BlogPost) => {
        dispatch({ type: 'ADMIN_BLOG_CHANGE_SINGLE_POST_CHECK', payload: post.postId });
    };

    const OnNewPostClick = () => {
        history.push(adminSidePanelPaths.blogNewPost);
    };

    const {
        BlogContent,
        AdminCheckbox,
        Checkbox,
        CheckboxPosts,
        AdminEditButtonsInputs,
        ButtonsPart1,
        ButtonsPart2,
        SearchBox,
        SearchInput,
        SearchButton,
        BlogPostSection,
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
                {isLoading && <div> loading </div>}
                {!isLoading && <Fragment>
                    <AdminTitleSection title="Zarządzanie blogiem" />
                    <BlogContent>
                        <AdminEditButtonsInputs>
                            <ButtonsPart1>
                                <AdminCheckbox>
                                    <Checkbox type="checkbox" checked={isAllChecked} onClick={CheckAll} />
                                </AdminCheckbox>
                                <AdminButton buttonStyle="gray" buttonText="Opublikuj" />
                                <AdminButton buttonStyle="gray" buttonText="Usuń" />
                            </ButtonsPart1>
                            <ButtonsPart2>
                                <AdminButton buttonStyle="pink" buttonText="Nowy post" onClick={OnNewPostClick} />
                                <SearchBox>
                                    <SearchInput />
                                    <SearchButton></SearchButton>
                                </SearchBox>
                            </ButtonsPart2>
                        </AdminEditButtonsInputs>
                        {posts.map(post =>
                            <BlogPostSection>
                                <TableCheckbox>
                                    <CheckboxPosts type="checkbox" checked={post.isChecked} onClick={() => CheckSingle(post)} />
                                </TableCheckbox>
                                <TableInfoBox>
                                    <DateTitleBox>
                                        <PostDate>{moment(post.date).format('DD.MM.YYYY')}</PostDate>
                                        <PostTitle>{post.title}</PostTitle>
                                    </DateTitleBox>
                                    <OptionBox>WYŚWIETL | EDYTUJ | USUŃ</OptionBox>
                                </TableInfoBox>
                            </BlogPostSection>)}
                    </BlogContent>
                </Fragment>
                }
            </div>
        </Fragment>
    );
};

export default AdminBlogComponent;
