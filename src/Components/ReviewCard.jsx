import React, { useState } from "react";
import quote from "../assets/quote.svg";
import {
  Button,
  useColorModeValue,
  Badge,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

function ReviewCard({ review, reviewsCount }) {
  const { author, content, created_at: date } = review;
  const [isExpanded, setIsExpanded] = useState(false);

  // Format date
  const formatDate = (dateString) => {
    let inputDate = dateString.slice(0, 10);
    let parts = inputDate.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };

  // Word count and display logic
  const words = content.split(" ");
  const wordCount = words.length;
  const MAX_WORDS = 250;
  const shouldTruncate = wordCount > MAX_WORDS;

  // Show review only if it has enough content when reviewsCount is 10
  const showReview = reviewsCount === 10 ? wordCount > 50 : true;

  // Format date
  const formattedDate = formatDate(date);

  // Calculate content to display
  const displayContent =
    shouldTruncate && !isExpanded
      ? words.slice(0, MAX_WORDS).join(" ") + "..."
      : content;

  // Background and text colors using useColorModeValue for theme support
  const bgColor = useColorModeValue("#6365f12e", "#6365f150");
  const quoteColor = useColorModeValue("#6366F1", "#8183f5");

  if (!showReview) return null;

  return (
    <Box
      className="review-card"
      p={5}
      m={8}
      rounded="lg"
      bg={bgColor}
      shadow="lg"
      minW={{ base: "90vw", sm: "30rem" }}
      maxW={{ base: "95vw", md: "50rem" }}
      borderLeft="4px solid"
      borderColor="#6366F1"
      position="relative"
    >
      <img src={quote} className="w-8 mb-2" alt="Quote Icon" />

      <Text
        fontSize="md"
        my={3}
        lineHeight="1.7"
        maxH={isExpanded ? "none" : "20rem"}
        overflowY={isExpanded ? "visible" : "auto"}
        pr={2}
        css={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#6366F1",
            borderRadius: "10px",
          },
        }}
      >
        {displayContent}
      </Text>

      {shouldTruncate && (
        <Button
          size="sm"
          variant="outline"
          colorScheme="purple"
          onClick={() => setIsExpanded(!isExpanded)}
          mb={3}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      )}

      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Box>
          <Text fontWeight="bold" color="#6366F1">
            {author}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {formattedDate}
          </Text>
        </Box>

        <Badge colorScheme="purple" px={2} py={1} borderRadius="md">
          {wordCount} words
        </Badge>
      </Flex>
    </Box>
  );
}

export default ReviewCard;
