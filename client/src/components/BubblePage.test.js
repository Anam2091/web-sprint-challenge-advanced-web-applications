import React from "react";
import {render, fireEvent, waitFor} from "@testing-library/react";
import BubblePage from "./BubblePage";
import mockfetchColors from "./fetchColors"

jest.mock("./fetchColors");

test("Fetches data and renders the bubbles", async () => {
  // Arrange
  mockfetchColors.mockResolvedValueOnce(colors)

  // Act

  const {findByText, getByRole, getAllByTestId} = render(<BubblePage/>);

  // Assert

  //assert
//   await waitFor(() => {
//     expect(findByText(/colors/i)).toBeTruthy()
// })


  // Finish this test
});

let colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  
];