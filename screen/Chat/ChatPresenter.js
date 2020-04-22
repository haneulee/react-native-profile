import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ refreshFn, loading, title }) => (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
        <Container>
            <Text>{title || 'Chat'}</Text>
        </Container>
    </ScrollContainer>
);