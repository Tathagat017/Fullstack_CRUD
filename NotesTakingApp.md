pNotes Taking App :-

user routes :
1.Register->/users/register : To register a new user
2.Login->/users/login : For Authentication the registered user

notes routes :(Token required for these routes)</protected routes->below auth middleware>

1.create notest => /notes/create : post Creating a new note about some concept(post)
2.read all notes created => /notes : get
3.update notes created => /notes/update/:noteID : patch ->Updating any note patch
4.delete notes created => /notes/delete/:noteID : delete -> Deleting
