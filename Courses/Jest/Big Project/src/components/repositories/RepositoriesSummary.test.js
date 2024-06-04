import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays info about the repository", () => {

  const repository = {
    language: 'Javascript',
    stargazers_count: 8, 
    forks: 35,
    open_issues: 1,
  }

  render(<RepositoriesSummary repository={repository}></RepositoriesSummary>);
  
  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(value));

    expect(element).toBeInTheDocument()

}
});
    