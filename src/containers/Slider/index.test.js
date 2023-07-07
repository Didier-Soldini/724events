import { render, screen } from "@testing-library/react";
import Slider from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

const data = {
  focus: [
    {
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Gaming Day",
      description: "Evenement mondial autour du gaming",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Farming Day",
      description: "Evenement mondial autour de la ferme",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
  ],
};

describe("When slider is created", () => {
  it("a list card is displayed", async () => {
    window.console.error = jest.fn();
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );
    await screen.findByText("World economic forum");
    await screen.findByText("janvier");
    await screen.findByText(
      "Oeuvre à la coopération entre le secteur public et le privé."
    );
  });
});

// ajout du test fonctionnel=================================================================

it("affiche les cartes du slider et passe à la carte suivante après un délai", async () => {
  render(
    <DataProvider>
      <Slider />
    </DataProvider>
  );
  window.console.error = jest.fn();
  api.loadData = jest.fn().mockReturnValue(data);
 
  const event1Title = await screen.findByText("World economic forum");
  const event1Description = await screen.findByText("Oeuvre à la coopération entre le secteur public et le privé.");
  expect(event1Title).toBeInTheDocument();
  expect(event1Description).toBeInTheDocument();

  await (() => {
    const event2Title = screen.getByText("World Gaming Day");
    const event2Description = screen.getByText("Evenement mondial autour du gaming");
    expect(event2Title).toBeInTheDocument();
    expect(event2Description).toBeInTheDocument();
  }, { timeout: 6000 });

  await (() => {
    const event3Title = screen.getByText("World Farming Day");
    const event3Description = screen.getByText("Evenement mondial autour de la ferme");
    expect(event3Title).toBeInTheDocument();
    expect(event3Description).toBeInTheDocument();
  }, { timeout: 11000 });
});
