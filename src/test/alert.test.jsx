import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Alert from "../components/Alert.jsx";

describe('<Alert />', () => {
    it('should render correctly', () => {
        const { container } = render(<Alert type="danger">Erreur</Alert>);
        expect(container.firstChild).toMatchInlineSnapshot(`
          <div
            class="alert alert-\${type}"
            role="alert"
          >
            Erreur
          </div>
        `); 
      });
});
