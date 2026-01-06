using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace fullstack_application_backend_api.Models;

[Table("propertylistings")]
public partial class Propertylisting
{
    [Column("id")]
    public int Id { get; set; }
    [Column("property_type")]
    public string PropertyType { get; set; } = null!;
    [Column("property_value")]
    public decimal PropertyValue { get; set; }
    [Column("property_info")]
    public string PropertyInfo { get; set; } = null!;
}
