import React from "react";
import styled from "@emotion/styled";

const PageContent = styled.div`
    padding: 5rem;
    @media (max-width:991.98px) {
        padding: 1.5rem
    };
    @media (max-width:767.98px) {
        padding: 1rem
    };
`

const MainContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #d2d2dc;
    border-radius: 0;
    padding-right: 1rem !important,
    flex: 1 1 auto;
    padding: 1.25rem;
`

const Layout = ({ children }) => (
    <PageContent>
         <MainContent>
            {children}
        </MainContent>
    </PageContent>
)

export default Layout;