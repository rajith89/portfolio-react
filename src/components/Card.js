import { Heading,  Image, Text, Stack, HStack, VStack, } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (<HStack>
    <VStack bg='white' borderRadius='lg'>
      <Image
        src={imageSrc}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' p='3' spacing='3'>
        <Heading color='black' size='md'>{title}</Heading>
        <Text color='grey'>{description}
        </Text>
        <Text color='black'>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </Stack>
    </VStack>
  </HStack>

  );
};

export default Card;
