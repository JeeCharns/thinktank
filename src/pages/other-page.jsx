import { Button, Container, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import HeadingHome from "../components/banner";
import SubmitAnswer from "../components/submit";

// A helper function to get the query params in a url
const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const OtherPage = () => {
  const history = useNavigate();

  const [thinktankDocRef, setThinktankDocRef] = useState(null);
  const [thinktankData, setThinktankData] = useState(null);

  const query = useQuery();

  useEffect(() => {
    // when the page loads...
    // we get the query params in the url so in "https://localhost/3000?id=1234"
    // the query params are id=1234
    const docId = query.get("id");

    const loadThinkTank = async () => {
      // we got to firebase and look for this documentId
      const docRef = db.collection("ThinkTanks").doc(docId);
      const doc = await docRef.get({ source: "server" });
      if (!doc.exists) {
        // if it doesn't exist, we need to handle this error
        console.log("ooops - no document exists!!");
      } else {
        // if it does, we create a snapshot of the document and set it to state
        console.log("success!!! found the document");
        return docRef.onSnapshot((doc) => {
          setThinktankDocRef(docRef);
          setThinktankData(doc.data());
        });
      }
    };

    loadThinkTank();
  }, []);

  return (
    <>
    <HeadingHome />
    <Container pt={100} display="flex" alignItems="center" flexDir="column">
      <Text as="b" fontSize="lg" color="gray.700" textAlign="center" mb={50}>
      What would it mean for us to have a healthy work-life balance?      </Text>

      <Button onClick={() => history(-1)} mt={50}>
        I&apos;m scared, let &apos;s go back
      </Button>
    </Container>
    </>
  );
};

export default OtherPage;
