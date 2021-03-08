import { getProspectIdFromConversation } from "../messageUtils";

describe("messageUtils", () => {
  describe("getProspectIdFromConversation", () => {
    it("returns empty string when conversation is null or not provided", () => {
      const prospectId = getProspectIdFromConversation(null);
      expect(prospectId).toEqual("");
    });

    it("returns prospect_id from conversation's attributes", () => {
      //@ts-expect-error
      const prospectId = getProspectIdFromConversation({
        attributes: { prospect_id: "ZZZTTT" },
      });
      expect(prospectId).toEqual("ZZZTTT");
    });
  });
});
