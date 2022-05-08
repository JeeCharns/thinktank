import { Button, Container, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";

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
    const docId = query.get("id");

    const loadThinkTank = async () => {
      const docRef = db.collection("ThinkTanks").doc(docId);
      const doc = await docRef.get({ source: "server" });
      if (!doc.exists) {
        console.log("ooops - no document exists!!");
      } else {
        console.log('success!!! found the document')
        return docRef.onSnapshot((doc) => {
          setThinktankDocRef(docRef);
          setThinktankData(doc.data());
        });
      }
    };

    loadThinkTank();
  }, []);

  return (
    <Container pt={100} display="flex" alignItems="center" flexDir="column">
      <Heading textAlign="center" mb={50}>
        You found the secret page!
      </Heading>
      <Image src="https://media.giphy.com/media/RJhuJzSw9dwgSTzwci/giphy.gif" />
      <Button onClick={() => history(-1)} mt={50}>
        I&apos;m scared, let's go back
      </Button>
    </Container>
  );
};

export default OtherPage;
