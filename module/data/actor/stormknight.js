import { CommonActorData } from "./common.js";
import { torgeternity } from "../../config.js";
const fields = foundry.data.fields;

/**
 * class for actor data specific to Storm Knights
 */
export class StormKnightData extends CommonActorData {
  /**
   *
   * @returns {object} Schema for a Storm Knight
   */
  static defineSchema() {
    return {
      ...super.defineSchema(),
      axioms: new fields.SchemaField({
        magic: new fields.NumberField({ initial: 0, integer: true, nullable: false }),
        social: new fields.NumberField({ initial: 0, integer: true, nullable: false }),
        spirit: new fields.NumberField({ initial: 0, integer: true, nullable: false }),
        tech: new fields.NumberField({ initial: 0, integer: true, nullable: false }),
      }),
      details: new fields.SchemaField({
        background: new fields.HTMLField({ initial: "", textSearch: true }),
        race: new fields.StringField({ initial: "" }),
        sizeBonus: new fields.StringField({
          initial: torgeternity.sizes.normal,
          choices: Object.values(torgeternity.sizes),
          required: true,
        }),
      }),
      xp: new fields.SchemaField({
        earned: new fields.NumberField({ initial: 0, integer: true, nullable: false }),
        unspent: new fields.NumberField({ initial: 0, integer: true, nullable: false }),
      }),
    };
  }

  /**
   * Prepare base data for Storm Knights
   */
  prepareBaseData() {
    super.prepareBaseData();
  }

  /**
   * Prepare derived data for Storm Knights
   */
  prepareDerivedData() {
    super.prepareDerivedData();
    this.fatigue = 2;
    // Set clearance level
    if (this.xp.earned < 50) {
      this.details.clearance = "alpha";
    } else if (this.xp.earned < 200) {
      this.details.clearance = "beta";
    } else if (this.xp.earned < 500) {
      this.details.clearance = "gamma";
    } else if (this.xp.earned < 1000) {
      this.details.clearance = "delta";
    } else {
      this.details.clearance = "omega";
    }
  }
}
