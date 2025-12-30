using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudyProject.Models
{
    [Table("Usuarios")]
    public class Usuarios
    {
        [Display(Name = "UserId")]
        [Column("user_id")]
        public int Id { get; set; }

        [Display(Name = "UserName")]
        [Column("user_name")]
        [Required]
        public string Name { get; set; }
    }
}
