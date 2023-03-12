// import { render, screen } from "@testing-library/react";
// import data from "../../utils/data";
// import Header from ".";

// test("renders french version navigation and language button", async () => {
//   render(
//     <Header
//       textContent={data.headerNavItems}
//       language={"FR"}
//       setLanguage={() => false}
//     />
//   );

//   const headerFirstAnchor = screen.getByText(/compétences/i);
//   expect(headerFirstAnchor).toBeInTheDocument();

//   const headerSecondAnchor = screen.getByText(/mes projets/i);
//   expect(headerSecondAnchor).toBeInTheDocument();

//   const headerThirdAnchor = screen.getByText(/cv/i);
//   expect(headerThirdAnchor).toBeInTheDocument();

//   const languageButton = screen.getByTestId("LanguageSelectorButton");
//   expect(languageButton).toBeInTheDocument();
// });

// test("renders english version navigation", async () => {
//   render(
//     <Header
//       textContent={data.headerNavItems}
//       language={"EN"}
//       setLanguage={() => false}
//     />
//   );

//   const headerFirstAnchorText = screen.getByText(/skills/i);
//   const headerSecondAnchorText = screen.getByText(/my projects/i);
//   const headerThirdAnchorText = screen.getByText(/cv/i);

//   expect(headerFirstAnchorText).toBeInTheDocument();
//   expect(headerSecondAnchorText).toBeInTheDocument();
//   expect(headerThirdAnchorText).toBeInTheDocument();
// });
